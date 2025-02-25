// 后端代码
const express = require('express')
const app = express()
const fs = require('fs')
const Vue = require('vue')
const renderer = require('@vue/server-renderer')
const vue3Compiler = require('@vue/compiler-ssr')
const { log } = require('console')

// 一个vue的组件
const vueapp = {
  template: `
    <div>
      <h1 @click="add">{{num}}</h1>    
      <ul >      
        <li v-for="(todo,n) in todos" >{{n+1}}--{{todo}}</li>    
      </ul>  
    </div>`,
  data() {
    return {
      num: 1,
      todos: ['吃饭', '睡觉', '学习Vue']
    }
  },
  methods: {
    add() {
      this.num++
    }
  }
}

//编译组件中的template模板
vueapp.ssrRender = new Function('require', vue3Compiler.compile(vueapp.template).code)(require)
app.get('/', async function (req, res) {
  let vapp = Vue.createSSRApp(vueapp)
  let vhtml = await renderer.renderToString(vapp)
  const title = 'vue ssr'
  //创建html页面，将vhtml拼接到页面中
  let ret = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
  </head>
  <body>
    <div id="app">
    ${vhtml}
    </div>
  </body>
</html>
`
  res.send(ret)

})


app.listen(8080, () => {
  console.log('listen on 8080');
})