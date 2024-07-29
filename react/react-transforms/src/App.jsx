import { useState } from 'react'
import LanguageSelector from './components/LanguageSelector';
// react 组件 = 函数 + JSX 
// JSX ? 
function App() {
  // vue ref 
  const [sourceLanguage, setSourceLanguage] = useState('zho_Hans');
  const [targetLanguage, setTargetLanguage] = useState('eng_Latn');
  const [input ,setInput] = useState('')
  const [output ,setOutput] = useState('')
    // ref reactive Model 
    // useState hooks 思想直接内置到框架
  const headerEle = (
    <h1>首页</h1>
  )
  return (
    // template  view 
    //不要标签：伪元素  文档碎片节点
    <>
      <h1>Transformer.js</h1>
      <h2>ML-powered multiligual translation in React!</h2>
      <div className="container">
        <div className="language-container">
        <LanguageSelector 
          type={"原语言"} 
          defaultLanguage={sourceLanguage}
          onChange={x => setSourceLanguage(x.target.value)}   
        />
        <LanguageSelector 
          type={"目标语言"} 
          defaultLanguage={targetLanguage}
          onChange={x => setTargetLanguage(x.target.value)}   
        />
      </div>
      <div className="textbox-container">
        <textarea
        value={input}
        rows={3}
        onChange={e=>setInput(e.target.value)}
        />
          <textarea
        value={output}
        rows={3}
        readOnly
        />
      </div>
      </div>
      
    </>
  )
}

export default App
