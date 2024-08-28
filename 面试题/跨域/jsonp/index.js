const { log } = require('console');
const http = require('http');

http.createServer(function(req,res){
  const query = new URL(req.url,`http://${req.headers.host}`).searchParams
  // console.log(query.get('cb'));
  if(query.get('cb')){
    const cb = query.get('cb')
    const data = 'hello world'
    const result = `${cb}("${data}")`

    res.end(result)
  }
  
  // res.end('hello world')
}).listen(3000)