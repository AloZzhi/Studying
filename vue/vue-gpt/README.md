## 项目架构

- utils 文件夹

  - 封装常用的工具方法
    防抖节流
    gpt http 请求

- LLM 可以通过 sdk / http 访问接口

  - http 复杂，好处是不需要搞后端
  - libs/gpt.js 封装 chat 搞定
  - async await
  - fastmock 模拟请求数据
    - url https://api.302.ai/v1/chat/completions
    - fetch post
    - {
      headers: {
      "Content-Type": "application/json",
      <!-- 授权信息 -->
      "Authorization":"Bearer " + api_key
      },
      body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: messageList
      })
      }

- tailxindcss 原子级别 css
  npm install -D tailwindcss postcss autoprefixer  
   npx tailwindcss init -p
  - 基本不用写 css，很高效
  - 原子级别 css,复用特别高
  - 只需要组装 tailwindcss 类名
  - 4 = 1rem
  - px | y 水平 垂直
