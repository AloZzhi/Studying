# 同源策略

协议 域名 端口 都相同的才叫同源

# 解决方案
1. JSONP
  1. 借助script标签的src属性不受同源策略的影响来发送请求
  2. 给后端携带一个参数callback并在前端定义callback函数体
  3. 后端返回callback的调用形式并将要影响的值作为callback的实参
  4. 当浏览器接收到响应后，就会触发全局的callback函数从而让callback以参数的形式接收到后端的响应

  - 需要后端配合，只能发get请求

2. cors
  通过设置响应头中的某些字段，比如，access-control-allow-origin 设置允许的源来通知浏览器此时同源策略不需要生效

3. nginx
  相当于node代理

4. WebSocket
  scoket协议天生不受同源策略的影响

5.postMessage
当页面一通过iframe嵌套了页面二，这两个页面上已经无法进行通讯的，因为跨域了，但是使用postMessage可以进行跨域通讯

6. document.domain
  两个页面通过iframe进行嵌套，且两个页面的二级域名一致（这种情况下可以进行通讯）