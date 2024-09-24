# 路由
最早使用来描述服务器上资源路径的

# 前端路由
URL和UI页面的映射关系

1. 当url修改了，页面也要更新
2. 浏览器不能刷新
3. 咋就知道URL变更了


# hash

在浏览器url后接#xxxx   这段内容会被视为hash值，而hash值的变更本身就不会引起页面的刷新，
所以，当用户的行为修改了URL，我们只需要监听hashchange事件来实现页面结构的更新


# history
html 提供的 history 对象拥有pushState和replaceState两个方法，他们可以用来修改url不会引起页面刷新


  