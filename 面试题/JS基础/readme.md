# 数据类型

# 闭包 可以封装私有变量

js 中，函数执行完毕后执行上下文一定会被销毁，但该函数存在内部函数，且内部函数被提取到该函数的外部执行，那么内部函数会出现无法访问该函数中的变量情况，这违背了 JS 中内部函数(可以访问外部函数变量)的作用域规则，所以引入了闭包的概念，用来保留被销毁的函数作用域中仍然被访问的变量。

根据词法作用域的规则，内部函数总是可以访问其外部函数中的变量的。
在函数执行完毕后，他的执行上下文对象要被销毁。

当函数A内部声明了一个函数B，函数B被拿到A的外部调用，为了同时满足以上两个规则，函数A的执行上下文被销毁后会遗留下来一个对象空间，用于存放函数B有权访问的所有变量，这个对象空间被称为闭包。

# 原型

1.

# addEventListener 的第三个参数

1. 从 window 上往目标处传播 捕获
2. 事件来到目标处，触发
3. 事件从目标处往 window 上传播 冒泡（默认触发阶段，，，，，，flase）
   e.stopPropagation() 阻止事件流传播
   e.stopImmediaPropagation() 阻止同一 DOM 绑定多个相同的事件

# AJAX,axios,fetch

1. ajax 基于 XMLHttpRequest 封装
2. axios 基于 XMLHttpRequest 封装,但是内置了 promise，可以在 window 和 node 环境在使用
3. fetch 是 window 的一个方法，也内置了 promise,但是 IE 不支持

# 防抖，节流

# 高阶函数

可以接收函数，输出一个函数

# 柯里化

代码的复用

# 箭头函数

没有 this
没有 arguments
没有显式原型
不能被 new 调用

# commonJS 和 ESmoduel

commonJS：拷贝操作，运行时加载，require 可以写在任意地方（函数体中）

ESmoduel：引入，编译时输出（只能在全局顶层）

# (a == 1 && a == 2 && a == 3 )==true

- 数据劫持

- a.join = a.shift

<!-- - var a={
      n:1,
      toString:function(){
      return a++
       }
  } -->

# 跳出 forEach 循环

# 获取元素几何属性

getBoundingClientRect()   只以顶部，左边为基准


