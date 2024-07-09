const Koa = require('koa');
const app = new Koa()
const main = (ctx) => {
  // console.log(ctx.request);
  // console.log(ctx.req);
  // ctx.res.end('hello')
  // ctx.response.body = 'hello koa'
  console.log(ctx.url);
  ctx.body = 'hello koa!!!'//代理

}
app.use(main)
app.listen(3000, () => {
  console.log('listening on port 3000');
})