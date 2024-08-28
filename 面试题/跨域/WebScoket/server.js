const WebSocket = require('ws')

const ws = new WebSocket.Server({port:3000})
let count = 0

ws.on('connetion',function(obj){
  obj.on('message',function(data){
    obj.send('欢迎访问')

    setInterval(()=>{
      obj.send(++count)
    },2000)
  })
})