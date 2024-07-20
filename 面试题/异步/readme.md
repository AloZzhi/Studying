# 异步的发展

1. 回调
2. promise
   - 拥有三种状态为 pending fulfilled rejected
   - 实例化一个 promise 会得到一个状态为 pending 的实例对象
   - 该对象可以访问 promise 原型上的 then 方法
   - 当该对象中的状态没有变更为 fulfilled,then 接收到的回调是不触发的
3. generater

   - generator 函数得分执行返回一个 Generator 对象，该对象包含一个 next 方法
   - next 方法可以用来解除 yeild 封印，不断地调用 next 会让 js 引擎不断地执行下一个 yeild
   - 哪怕 yeild A() 这个 A 有返回值，Generator 函数依然不采用这个返回值，Generator 函数只认自己下一个 next 传入的值

4. async await

- Generator + Promise + co
