// 执行结果是什么？
function test(a, b) {
    console.log(a);  // 1
    c = 0
    var c;
    a = 3
    b = 2
    console.log(b); // 2
    function b() { }
    console.log(b); //2
}
test(1)

//GO：{
//     test: function
// }
// AO:{
//     a:undefined,1,3
//     b:undefined,function,2
//     c:undefined,0,
// }