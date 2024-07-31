# Transformers
- react
    面试官，我了解react,一周就可上手，我用react写过项目，

- worker.js
    js 对页面操作外的复杂计算(AI , 压缩)， html5 提供了 web worker 子线程来通过消息机制完成任务

    Web Worker 是 HTML5 提供的一项技术，它允许在 Web 应用程序中创建多线程环境，
    与主线程并行处理任务，如数据处理、复杂计算等，避免阻塞界面，提升性能
    分Dedicated和Shared两种类型，通过消息传递机制通信。但受限于同源策略，无法直接访问DOM和本地文件

- LLM 下载太慢了 ，前端提供一个体验反馈 下载中。。。

- Precentage组件
  - AI用户体验prompt工作的大模型思考的时间
  - text 模型文件 percentage 进度条 参数，react es6 解构
  - ?? es6 的三元运算符快捷方式，阮一峰的es6
  - 只显示两位小数，包装类的概念

  - 细节和场景，如何解决的

- 介绍项目
    此项目全面采用vue3 es6 风格，setup 语法比vue2选项式API 更简洁 ，更好维护 不再受类式约束
     //Vue2 选项式API 状态在data(){return ()} 方法放在method
    //生命周期 ...computed 逻辑因为类的结构，分散 
    // setup 函数式 写法自由
    //可以按逻辑（响应式状态+方法+生命周期写到一起）

    举个例子，进度条相关的逻辑（响应式，生命周期等）和web worker 的逻辑就分开来了 ，每个逻辑在一起， 不受类的形式约束，更好维护

- web worker 多线程
- 面向对象封装和单例模式
- 单例模式
    import {pipeline} from ''
    - pipeline('translate',model)
    - AI 工作封装起来
        transformers.js nlp库 几十种常见的nlp任务 pipeline排除你要的那个nlp任务 使用task model 分装到模型
    - pipeline 很漫长，耗内存 上单例模式
        只实例化一次的类
        静态方法，不需要new
        MyTranslationPipeline.getInstance()