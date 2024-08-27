# 存储
cookies          localStorage          sessionStorage          IndexedDB
服务端设置        一直存在                页面关闭就消失             一直存在
  4k              5M                      5M                     无限大
自动携带在http      不参与                  不参与                   不参与
请求头中

默认不允许跨域      可跨域                  不可跨域                 不可跨域 
但可以设置

<!-- www.a.text.com -->
<!-- www.b.text.com -->

# cookies
1. value: cookie(加密过的用户标识)
2. http-only: 不允许js访问
3. secure: 只能HTTPS协议携带
4. same-site: 规定浏览器不能再跨域请求中携带cookie


# 缓存
 - 强缓存
  'cache-control': 'max-age=86400'  

通过浏览器地址栏请求的资源，请求头内默认 cache-control: 'no-cache',浏览器会默认忽略响应头中的cache-control设置


  - 协商缓存
    1. 后端设置响应头 'last-modified': '资源最后一次修改的时间'，浏览器就会在下一次请求该资源时在请求头中默认携带 if-modified-since：'资源最后一次修改的时间'， 后端通过对比请求头中的时间戳和资源最后一次修改的时间，来判定该资源是否有更新，如果没有更新则向浏览器返回304状态码，驱使浏览器复用上一次的资源

    2. 后端设置响应头 'etage': '由文件内容加密得到的值'，浏览器就会在下一次请求该资源时在请求头中默认携带 if-None-Match: '由文件内容加密得到的值', xxxxxx