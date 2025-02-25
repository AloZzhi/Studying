const http = require('http');
const path = require('path')

//存放切片的地方
const UPLOAD_DIR = path.resolve(__dirname, '.', 'qiepian')


const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'access-control-allow-origin': '*',
    'access-control-allow-headers': '*',
    'access-control-allow-methods': '*'
  })

  if (req.method === 'OPTIONS') {
    //请求预检
    res.status = 200
    res.end()
    return
  }

  if (req.url === '/upload') {

    // //接收前端传过来的
    // res.on('data', (data) => {
    //   console.log(data);
    // })
  }



  
  res.end('Welcome')
})

server.listen(3000, () => {
  console.log('listening on port 3000');

})