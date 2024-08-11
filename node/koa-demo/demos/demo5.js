const Koa = require('koa');
const app = new Koa()
const router = require('koa-route')

const main = (ctx) => {
  ctx.type = 'html'
  ctx.body = '<h2>首页</h2>'
}

const about = (ctx) => {
  ctx.type = 'html'
  ctx.body = '<a href ="/">关于首页，点击去首页</a>'
}
const logger = (ctx, next) => {
  console.log(`${ctx.url} - ${ctx.method} - ${Date.now()}`);
  next()
}

// 使用中间件
app.use(logger)

// 使用路由
app.use(router.get('/', main))
app.use(router.get('/about', about))

// 启动服务器
app.listen(3000, () => {
  console.log('listening on port 3000');
})