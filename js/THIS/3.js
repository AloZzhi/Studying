function foo() {
    console.log(this);
}
// this 代指某一块作用域
// foo();

// var obj = {
//     a: 1,
//     foo: function () {
//         console.log(this);
//     }
// }

// obj.foo();

function bar() {
    foo();
}



function baz() {
    bar();
}
baz();


