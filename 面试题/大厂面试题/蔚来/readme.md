# 路由
路由最早是用来描述服务器上资源路径的

# 前端路由
通过  url路径来匹配对应的代码块  的这么一套机制
1. 修改url后，页面要更新
2. 浏览器不刷新
3. 如何监听URL变更

- hash路由(适合单页应用)：
#/home 在浏览器的url中出现#号， #后面的内容会被看做是一个hash值，hash值的变化不会引起页面的重新加载，从而直接监听hashchange来判断要展示的对应的组件
PS：哈希值相当于xy映射函数的值，但不可逆 

1. 当用户点击带有 # 的链接时，浏览器不会向服务器发送请求，而是触发 hashchange 事件。

2. 开发者可以通过监听 hashchange 事件，根据当前的 hash 值来决定显示哪个组件或页面。



- history 路由：
首先阻止a标签的默认行为，然后使用history.pushState()来改变URL路径，它是不会引起页面的重新加载的，在url变更后，读取本地的pathname来判断要展示的对应的组件

考虑到浏览器的前进后退按钮的存在，需要监听 popstate事件，来判断要展示的对应的组件

# 计算页面白屏时间

- 优化问题
1. DNS解析耗时
2. TCP建立连接耗时
3. 请求耗时（CDN网络分发，提升服务器质量，提升数据库查找效率）
4. TCP断开连接耗时
5. html解构耗时（html尽量不嵌套过深）
6. js执行耗时
7. css加载耗时（尽量使用更精准的选择器）
8. 图片加载耗时

# 在移动端开发要注意的问题

1. 移动端的屏幕大小兼容  rem   %  媒体查询
2. 浏览器的兼容性 （对不同兼容的浏览器写特殊的css，babel来降级js）
3. 移动端的手势事件  （taughtstart  taughtmove tauchend）
4. 300ms  延迟  （fastclick）


# 数组和链表的区别
1. 数组的内存是连续的， 链表的内存是离散的
2. 数组可以通过下标来访问任何元素，链表只能通过指针来访问元素
3. 数组的查询复杂度是o(1),链表的查询复杂度是o(n)

# 队列和堆的区别
- 队列 （一边进一边出）
- 双端队列（两边都能进出）

- 二叉树（每个节点最多有两个子节点）

- 堆（完全二叉树，除最后一层外每个节点都有两个子节点）

1. 队列的存储是顺序的，或者链式的，堆的存储是顺序的
2. 队列的插入删除复杂度为O(n),堆为O(log n)
3. 队列常用于保证消息的有序性，堆常用于保证消息的优先级


