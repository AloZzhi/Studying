
export default function chlid(props) {
  const data = 'ChildData'
  return (
    <div>
      chlid --- {props.msg}

      <button onClick={() => props.fn(data)}>发送给父组件</button>
    </div>
  )
}
