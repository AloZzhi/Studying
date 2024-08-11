// const Koa = require('koa');
// const app = new Koa()
// const main = (ctx) => {
//   if (ctx.request.header.accept === 'xml') {
//     ctx.body = '<data>Holle World</data>'
//   } else if (ctx.request.accepts('html')) {
//     ctx.body = '<p>Holle World!</p>'
//   }

// }
// app.use(main)
// app.listen(3000, () => {
//   console.log('listening on port 3000');
// })

const Koa = require('koa');
const app = new Koa();

const main = (ctx) => {
  if (ctx.request.accepts('html')) {
    ctx.body = '<p>Hello World!</p>'; // 如果客户端接受 HTML，返回 HTML 格式的响应
  } else if (ctx.request.accepts('json')) {
    ctx.body = { message: 'Hello World!' }; // 如果客户端接受 JSON，返回 JSON 格式的响应
  } else {
    ctx.body = 'Hello World!'; // 默认返回纯文本响应
  }
};

app.use(main);
app.listen(3000, () => {
  console.log('listening on port 3000');
});