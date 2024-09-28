import Child from "./chlid"

export default function parent() {
  const msg = '父组件的数据'

  const getData = (data) => {
    console.log(data);

  }
  return (
    <div>
      <h2>parent</h2>
      <Child msg={msg} fn={getData}></Child>
    </div>
  )
}
