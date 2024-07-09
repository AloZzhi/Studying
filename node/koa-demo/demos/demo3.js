const Koa = require('koa');
const app = new Koa()
const fs = require('fs');

const main = (ctx) => {
  // ctx.response.type
  // const context = fs.readFileSync('./template.html', 'utf-8').toString()
  // console.log(context)
  // ctx.body = context

  ctx.type = 'html'
  // ctx.res.writeHead(200, { 'Content-Type': 'text/html' })

  const content = fs.createReadStream('./template.html')
  // console.log(content);
  ctx.body = content
}
app.use(main)
app.listen(3000, () => {
  console.log('listening on port 3000');
})