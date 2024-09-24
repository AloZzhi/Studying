# 打包流程
1. 读取入口文件中的内容
2. 分析入口文件，递归地去读取模块所依赖的其他文件内容，生成ATS语法树
{
  'main.js':{
    'code':
    import { add } from './tools/add.js'
    import '.style/index.css'
    console.log(add(1, 3));
'need':{
  
}

  }
}


3. 根据AST语法树生成浏览器能运行的代码 