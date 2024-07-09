
const http = require('http');

const server = http.createServer((reg, res) => {
  res.end('hello world')
})
6
server.listen(3000, () => {

  console.log('listening on port 3000');
})