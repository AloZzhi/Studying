let a = {
    age: 18,

}

function test() {

}
// 函数也是对象，也有属性
// test.name
// test.length
// test.prototype
// test.[[scope]] 作用域属性，给js引擎访问的，我们拿不到 ---隐式属性

// test() ------->AO：{} 函数调用，在引擎中创建这个函数的执行上下文对象，称之为AO action object，记录有效标识符...
// 执行完之后会被回收掉








