//引入本地（node_mdoules）openai 依赖node-fetch 等
//package.json 项目描述文件 dependencies
前端 + 后端 + AI
//类 require 关键字
const OpenAI = require('openai');
//实例化OpenAI
//options 配置项
//AI全栈开发
//prompt ->GRT-API-free-> openai
const client = new OpenAI({
      //收费：使用权限
      apiKey:'sk-NuXTFda8FxDtb7VM1uLWia5vWl4kIERuMQksS2mQJxSblHEK',
      //'通行证' 能使用翻墙得原因 proxy代理
      baseURL:'http://api.chatanywhere.teah/v1'
})