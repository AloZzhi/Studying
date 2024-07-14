function foo() {
    console.log(this);//window
}
// this 代指某一块作用域
// foo();//独立调用

// var obj = {
//     a: 1,
//     foo: function () {
//         console.log(this);//obj
//     }
// }

// obj.foo();

function bar() {
    foo();
}



// function baz() {
//     bar();
// }
// baz();


