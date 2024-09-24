const fs = require('fs')
const path = require('path')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const babel = require('@babel/core')


const getModeleInfo = (file) => {
  const body = fs.readFileSync(file, 'utf-8')
  const ast = parser.parse(body, { sourceType: 'module' })

  const deps = {}  // 各个模块的的路径
  traverse(ast, {
    ImportDeclaration({ node }) {
      const dirname = path.dirname(file)
      const abspath = './' + path.join(dirname, node.source.value)
      deps[node.source.value] = abspath
    }
  })

  // 代码转换
  const { code } = babel.transformFromAst(ast, null, {
    presets: ['@babel/preset-env']
  })

  return { file, deps, code }
}

const parseModules = (file) => {
  const entry = getModeleInfo(file)
  const temp = [entry]
  for (let i = 0; i < temp.length; i++) {
    const deps = temp[i].deps
    if (deps) {
      for (const key in deps) {  // './add.js': './src/add.js'
        if (deps.hasOwnProperty(key)) {
          temp.push(getModeleInfo(deps[key]))
        }
      }
    }
  }

  const depsGraph = {}
  temp.forEach(moduleInfo => {
    depsGraph[moduleInfo.file] = {
      deps: moduleInfo.deps,
      code: moduleInfo.code
    }
  })

  return depsGraph
}

const bundle = (file) => {
  const depsGraph = JSON.stringify(parseModules(file))
  return `(function (graph) {
      function require(file) {
          function absRequire(relPath) {
              return require(graph[file].deps[relPath])
          }
          var exports = {};
          (function (require,exports,code) {
              eval(code)
          })(absRequire,exports,graph[file].code)
          return exports
      }
      require('${file}')
  })(${depsGraph})`
}

const content = bundle('./src/index.js')
console.log(content);

fs.mkdirSync('./dist')
fs.writeFileSync('./dist/bundle.js', content)