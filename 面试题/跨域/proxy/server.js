const { log } = require('console')
const http = require('http')
http.createServer(function(req,res){
  res.writeHead(200,{
    "access-control-allow-origin":"*"
  })
  http.request({
    host:'',
    port:'3000',
    path:'/',
    method:'GET',
    headers:{}
  },proxyRes=>{
    proxyRes.on('data', function(data) {
      console.log(data.toString())
      
    })
  }).end()
}).listen(3000)