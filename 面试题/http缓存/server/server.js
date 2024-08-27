import mime from 'mime'

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  let filePath = path.resolve(__dirname, path.join('www', req.url))

  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath) // 获取该路径对应的资源

    const isDir = stats.isDirectory() // 判断是否是文件夹
    const { ext } = path.parst(filePath)//路径的后缀

    const timeStamp = req.headers['if-modified-since']
    let status = 200
    if(timeStamp&& Number(timeStamp)=== stats.mtimeMs){//资源没变
      status = 304 //资源重定向
    }


    if (isDir) {
      filePath = path.join(filePath, 'index.html')
    }
    
    if (!isDir && fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath) // 读取文件
      res.writeHead(status, {
         'Content-type': mime.getType(ext),
         'cache-control':'max-age=86400', //一天
         'last-modified':stats.mtimeMs  //资源最新修改时间
        })
      res.end(content) 
    } 
  }
  
})

server.listen(3000, () => {
  console.log('listening on port 3000');
})