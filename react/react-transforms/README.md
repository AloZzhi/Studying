- 介绍自己

- react 怎么聊？
    - vue 搞得多， react 也完了下， mvvm, 组件化，响应式， 迁移下很快的 一周左右吧。
        三天， 试下看
    - vue 优势是API设计优秀， 对新手友好， 文档全  
        - react JS 风格激进， 函数式编程， JSX , hooks 在业内遥遥领先
            对新手不太友好
        - vue3 从vue2 选项式API发展到setup 模式，在函数式， hooks 这块
            也支持的很好了
        - vue3 现在对ts 的支持也很好了， 
        - vue  react 都可以用，看团队和项目的需要
    - react 响应式  useState  天生的hooks 函数式基因 

前端实习生/AI全栈实习生
- 你怎么看待前端和AI 发展
    - 前端因AI 用户体验改变了， 前端的天职是用户体验， 所以要学AI 
        - chatgpt 就是全新的产品体验形式 ，robot 助理
            openai  推出了 chat search 挑战google 搜索 
        - AI 生成图片并上传  AIGC   coze 
        - 熟悉 openai 的接口调用 
        - 通义千问等code copilot 提升开发效率， 干预学习并实战大前端，全栈等
            技能， 未来技术鸿沟会越来越小， 自己已经准备好利用AIGC 的工具。
        - transformer.js  langchain.js  AI框架已经拥抱前端，
        - 端模型已经成熟， transformer.js 直接调用

- 

- transformer.js
    来自全球最大的AI 社区 HuggingFace , 全球的LLM都在这里发布
    transformer.js  是一个NLP 机器学习库， 语言翻译

- html5
    - Web Worker 启动新线程 
    - 前端未来会越来越复杂  VR/AR AI  3D 高性能， 时间，
        单线程js 解决不了的 
    - 消息机制来通信， 将复杂任务交给子线程去做 
        html5  web worker
    - new Worker(new URL('./worker.js', import.meta.url, { type: 'module' }))
    - worker 线程中不可以用DOM 对象， 适合 计算
    - 通过通信机制与主线程交流 
        - addEventListener('message') 
        - postMessage  

## 嘉伦的面试
### event loop + promise 是重点
- event loop + await 
    做题


- transformers.js
    - import {} from 'cdn' 从cdn加载 ，更快
    - 远程加载 模型文件 有点大 几百M
    - 当未来这种小一点，性能好的一些的LLM在电脑，手机等设备支持JS直接调用端AI能力将会威力无比，前端AI时代将会到来
    - pipeline 第一个核心模块
        pipeline（task）