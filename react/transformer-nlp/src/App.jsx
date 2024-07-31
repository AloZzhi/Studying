import { useState, useRef, useEffect } from 'react'
import Progress from './components/Progress'
import './App.css'
function App() {
  
  // 进度条放到一起， 函数式组件的优势 
  // vue2 选项式API 状态在data() { return {} }  方法放在method 
  // 声明周期 ... computed   逻辑因为类的结构， 分散 异地恋 
  // setup , 函数式， 很自由， 
  // 可以按逻辑（响应式状态 + 方法 + 声明周期写到一起）
  const [progressItems, setProgressItems] = useState([])
  const [ready, setReady] = useState(false)
  
  // ref 对象 响应式的， 可以监听 
  const worker = useRef(null)
  // 让页面最快速度出来 
  useEffect(() => {
    // api请求 
    // worker 初始化 比较大消耗的
    if (!worker.current) {
      // 只实例化一次
      worker.current = new Worker(
        new URL('./worker.js', import.meta.url), {
          type: 'module'
      })
    }
    // console.log(worker.current, '????')

    worker.current.addEventListener('message', (event) => {
      console.log(event.data, '????')
      switch(event.data.status) {
        case 'initiate':
          setReady(false)
          setProgressItems(prev => [...prev, event.data])
        break;
        case 'progress':
          setProgressItems(
            prev => prev.map(item => {
              if (item.file === event.data.file) {
                return {
                  ...item,
                  progress: event.data.progress
                }
              }
              return item
            })
          )
        break;
      }
    })

    worker.current.postMessage({
      text: 'i love transformers'
    })


  })
  return (
    <>
      <div className="progress-bars-container">
      {
        ready === false && (
          <label>Loading models.... </label>
      )}
      {
        progressItems.map(data => (
          <div key={data.file}>
            <Progress text={data.file} percentage={data.percentage}/>
          </div>
        ))
      }
      </div>
    </>
  )
}

export default App
