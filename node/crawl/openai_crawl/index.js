// 机智将一部分适合ai做的任务交给LLM
// 工作更高效，50%不用做了
// npm i 安装到本地
// 将本地openai 引入到项目中
const OpenAI = require('openai')
// 实例化 
const client = new OpenAI({
  apiKey: 'sk-NuXTFda8FxDtb7VM1uLWia5vWl4kIERuMQksS2mQJxSblHEK',
  baseURL: 'https://api.chatanywhere.tech/v1'
})

async function main() {
  const chatCompletion = await client.chat.completions.create(
    {
      messages: [{ role: 'user', content: '你是谁?' }],
      model: 'gpt-3.5-turbo'
    }
  )
  console.log(chatCompletion.choices[0]); 
}

main()