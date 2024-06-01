//var a
//console.log(a);  //声明提升
//a = 1


// test()
// function test() {
//     var a = 123
//     console.log(a);
// }//函数声明 会整体提升









// // 执行结果是什么？
// function test(a, b) {
//     console.log(a);  // 1
//     c = 0
//     var c;
//     a = 3
//     b = 2
//     console.log(b); // 2
//     function b() { }
//     console.log(b); //2
// }
// test(1)

//GO：{
//     test: function
// }
// AO:{
//     a:undefined,1,3
//     b:undefined,function,2
//     c:undefined,0,
// }

var a = 1;
function fn(a) {
    var a = 2
    function a() { }
    console.log(a);
}
fn(3)