# 介绍自己



# react 怎么聊？
  - mvvm 组件化 响应式 迁移下很快的 

  - vue 优势是API设计优秀，对新手有好 文档全
    - react JS风格激进，函数式编程，JSX，hooks 在业内遥遥领先
      对新手不太友好
    - vue3 从vue2 选项式API发展到setup模式，在函数式，hooks这块也支持的很好了
    - vue3 现在对ts 的支持也很好了，
    - vue react都可以用，看团队和项目的需要
- react 响应式 useState 天生的hooks 函数式基因



# 前端实习生/AI全栈实习生
- 你怎么看待前端和AI发展
  - 前端因AI用户体验改变了，前端的天职是用户体验，所以要学AI
    - chatgpt 就是全新的产品体验形式，robot助理
      - openai 推出了 chat search 挑战google搜索
    - AI 生成图片并上传 AIGC coze
    - 熟悉openai 的接口调用
    - 通义千问等code copilot 提升开发效率，干预学习并实战大前端，全栈等技术。未来技术鸿沟会越来越小，自己已经准备好利用AIGC的工具
    - transform.js
    
- transform.js

    来自全球最大的AI社区HuggiesFace，全球的LLM都在这里发布
    transfrom.js是一个NLP机器学习库，语言翻译

- html5
    - Web Worker 启动新线程
    - 前端线程未来会越来越复杂 VR/AR AI  3D 高性能，时间
      单线程js解决不了的
    - 消息机制来通信，将复杂任务交给子线程去做
      html5 web worker
    - new Worker(new URL('./worker.js',import,meta.url,{type:'module'}))
    - worker 线程中不可以用户DOM对象，适合计算
    - 通过通信机制与主线程交流
      - addEventListener（'message',onMessageReceived）
      