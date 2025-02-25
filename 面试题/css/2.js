function jsonp(url,jsonCallback,success){
  let script = document.createElement('script')
  script.src =url
  script.async = true
  script.type ='text/javascript'
  window[jsonCallback] = function(data){
    success && success(data)
  }
  document.body.appendChild(script)
}
jsonp('http://xxx','callback',function(value){
  console.log(value);
  
})

//原理：利用script标签没有跨域限制的漏洞。通过script标签指向一个需要访问的地址并提供一个回调函数来接收数据
//特点：JSONP使用简单且兼容性不错，但只限于get请求



// jsonp
// cors
// document.domain
// postMessage 通过用于嵌入页面中的第三方页面数据。一个页面发送消息，另一个页面判断来源并接收消息。