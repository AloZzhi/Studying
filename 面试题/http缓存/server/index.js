const http = require('http')
const url = require('url')

const resposeData = {
  ID: 'zhangsan',
  Name: '张三',
  RegisterDate: '2024年8月1日'
}
function toHTML(data) {
  return `
    <ul>
      <li><span>账号：</span><span>${data.ID}</span></li>
      <li><span>昵称：</span><span>${data.Name}</span></li>
      <li><span>注册时间：</span><span>${data.RegisterDate}</span></li>
    </ul>
  `
}

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(`http://${req.headers.host}${req.url}`)
  if (pathname === '/') {
    const accept = req.headers.accept;  // 前端期望的类型

    if (req.method === 'POST' || accept.indexOf('application/json') >= 0) {
      res.writeHead(200, { 'Content-type': 'application/json' })
      res.end(JSON.stringify(resposeData))
    } else {
      res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' })
      res.end(toHTML(resposeData))
    }

  } else {
    res.writeHead(404, { 'Content-type': 'text/html' })
    res.end('<h1>Not Found</h1>')
  }
  
})

server.listen(3000, () => {
  console.log('listening on port 3000');
})