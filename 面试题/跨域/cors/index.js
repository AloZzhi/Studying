const http = require('http')

http.createServer(function(req,res){
  res.writeHead(200,{
    'access-control-allow-origin':'*',
    "access-control-allow-methods":'GET'

  })
  res.end('hello world')
}).listen(3001)