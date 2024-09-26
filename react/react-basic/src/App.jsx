// JS + XML
import './App.css'
import React, { Component } from 'react'

class HelloFoo extends Component {
  render() {
    return (
      <div>这是一个类组件</div>
    )
  }
}


const songs = [
  { id: 1, name: '一路向北' },
  { id: 2, name: '大笨钟' },
  { id: 3, name: '蒲公英的约定' },
]

const flag = true

//子组件
function HelloFn() {
  return (
    <div>子组件</div>
  )
}



function App() {
  const name = 'Alo'

  return (
    <>
      <div className="app">
        hello React {name}
        <ul>
          {
            songs.map(item => <li key={item.id}>{item.name}</li>)
          }
        </ul>

        <h3>
          {
            flag ? <span>react好好好</span> : 'vue好好好'
          }
        </h3>

        <h3 className='title'>
          {
            flag && '狗叠狗屎掉率，去你大爷的'
          }
        </h3>

      </div>

      <div className="">
        <HelloFn></HelloFn>
      </div>

      <div className="leizujian">
        <HelloFoo></HelloFoo>
      </div>   


    </>
  )
}

export default App