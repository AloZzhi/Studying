function a() {
    function b() {
        b = 33;
    }
    var a = 4399;
    b();
    console.log(a);
}
var glob = 100;
a();

// 1. 引擎看见a的定义 a作用域即a.[[scope]] a的作用域中一定可以访问到GO（内层一定能够访问到外层）--->0:GO对象 用来记录全局有哪些有效标识符 
// 2. a的执行，创建a的上下文对象AO:   0:AO{}  1:GO  先在AO找然后再去全局找，AO排前面 Go排后面  这种东西成为作用域链

var a = 1
function fn(a) {
    var a = 2;
    function a() {
        var b = a;
        consle.log(a)
    }
    fn(3)
}