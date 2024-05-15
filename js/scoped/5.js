console.log(a); //undefined  为什么不报错？
var a = 1;
// 在V8眼里会执行成： 1. var a   2. log(a)  3. a = 1
// var 声明提升


function tdzExample() {
    // 此时访问variable会抛出ReferenceError，因为处于TDZ
    console.log(1111111111);
    //console.log(variable); // ReferenceError: variable is not defined

    let variable = "I am initialized";

    // 初始化后访问variable是安全的
    console.log(2222222222);
    console.log(variable); // "I am initialized"
}

tdzExample();