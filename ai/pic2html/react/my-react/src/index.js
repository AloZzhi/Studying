// console.log('原生js');

import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'
//根节点 VUE/React功能的挂载点
//react 在哪个范围生效

const root = ReactDOM.createRoot(
  document.getElementById('root')
)
// // const App=<h1>涛哥真牛</h1>
// const App=React.createElement('h1',
//   { id: 'title',className: 'tit' },
//   '涛哥真TMD牛')
// const App=React.createElement('div',{className:'container'},
//   React.createElement('h1',{className:'title'},'涛哥真TMD牛')
// )

//react JSX 在js里直接写xml(html)
// const App = (
// <div className='container'>
// <h1 className='title'>
// 涛哥BATJTMD帅
// </h1>
// </div>)

root.render(
  <div>
    <App name="代号鸢" />
  </div>)