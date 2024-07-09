const Koa = require('koa');
const app = new Koa()
const main = (ctx) => {
  if (ctx.request.header.accept === 'xml') {
    ctx.body = '<data>Holle World</data>'
  } else if (ctx.request.accepts('html')) {
    ctx.body = '<p>Holle World!</p>'
  }

}
app.use(main)
app.listen(3000, () => {
  console.log('listening on port 3000');
})