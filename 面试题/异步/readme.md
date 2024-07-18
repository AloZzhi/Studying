# 异步的发展

1. 回调
2. promise
   - 拥有三种状态为 pending fulfilled rejected
   - 实例化一个 promise 会得到一个状态为 pending 的实例对象
   - 该对象可以访问 promise 原型上的 then 方法
   - 当该对象中的状态没有变更为 fulfilled,then 接收到的回调是不触发的
3. generater
4. async await
