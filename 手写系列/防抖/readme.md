# 防抖
在规定的时间内没有下一次的触发，就执行。

1. debounce返回一个子函数体，跟debounce形成闭包
2. 子函数体中每次先销毁上一个setTimeout，再创建一个新的setTimeout
3. 还原原函数的this指向
4. 还原原函数的参数