# 前端第一开发框架 React

- 安装项目脚手架
  npm i -g create-react-app 全局

  - npm config ls
    prefix
  - create-react-app --vertion
  - path prefix

- vue/react 流行的前端框架

  - 组件开发思想
    html + css + js 的功能组合 幻灯片 复用了，
    返回 JSX 函数就是组件
    react 组件由 js 文件+css 组成 import
    开发的最小单元
    App
    <App />像 html 一样的方式挂载

  - props
    props 是一个对象，可以传递数据
    父组件传过来的数据
    由有状态

  - mvvm
    不再需要 DOM 编程（性能低下），关注业务而不是 API

- create-react-app my-react
  -github 拉去一个标准的项目模板
  -src 开发目录 -入口文件
  - 安装项目依赖

## vue/react 如何运行起来

- ceate-react-app 脚手架
  - 单页应用
- npm run start
  web server 3000

- public/index.html 首页
  - root 挂载点
  - ReactDOM.createRoot() 根节点,react 接管
  - ReactDOM.render()
  - App 根节点
  - React.createElement(tag,props,children) 创建节点
  - JSX 语法糖 创建节点 表现力更好
- src/index.js 入口文件

  - react 接管开发

- git clone template
- npm run build 打包项目
  -npm i react

  http://192.168.92.1:3000 内网 IP
