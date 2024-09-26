import { useState } from "react"


function Son(props) {
  const msg = '子组件的数据'

  return (
    <div>
      <p>子组件 1 ----{props.num}</p>
      <button onClick={() => { props.foo(msg) }}>发送给父组件</button>
    </div>

  )
}

export default function App() {
  const count = 365
  const [message, Setmessage] = useState()

  const getDataFromSon = (data) => {
    console.log(data);
    Setmessage(data)//控制视图更新


  }
  return (
    <div>
      <h2>App3  ---- {count}</h2>
      <Son num={count} foo={getDataFromSon}></Son>
      <h3>{message}</h3>
    </div>

  )
}


