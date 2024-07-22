# 浏览器请求过程

# 浏览器渲染过程
1. 解析数据包得到html文件，css文件 （将二进制的字节数据解析为字符串）

2. 字节数据 ==> 字符串 ==> （标记）Token  ==> Node节点 ==>构建DOM树

3. 将css文件转化为 CSSOM 树

{
  tag: 'div',
  className: 'title',
  id: '',
  children: [
    {
      tag: 'div',
      className: 'title',
      id: '',
    }
  ]
}


4. DOM + CSSOM == render树   （渲染树只会包含显示的节点）

5. 计算布局 （回流）

6. GPU绘制  （重绘）

# 回流
1. 页面初次渲染
2. 增加、删除可见的DOM元素
3. 改变元素的几何信息
4. 窗口大小改变


# 重绘
1. 非几何信息被修改

# 回流必重绘，重绘不一定回流


# 浏览器的优化
浏览器会维护一个渲染队列，当改变元素的几何属性导致回流发生时，回流行为会被加入到渲染队列中，在达到阈值或者一定时间之后会一次性将渲染队列中所有的回流生效


# 强制渲染队列刷新
offsetTop, offsetLeft, offsetWidth, offsetHeight,
clientTop, clientLeft, clientWidth, clientHeight,
scrollTop, scrollLeft, scrollWidth, scrollHeight


# 减少回流
1. 让需要修改几何属性的容器先脱离文档流不显示，修改完后再回到文档流中
2. 借助文档碎片





# 为什么操作DOM慢？
因为 js引擎线程和渲染线程互斥，所以，当我们通过js来操作DOM的时候，就势必会涉及到两个线程的通信和切换，会带来性能上的损耗
