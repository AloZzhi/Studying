// function foo(){
//     console.log(this.a);
// }

// var a = 1;

// foo();

// var obj = {
//     a: 1,
//     b: function () {
//         foo()
//     }
// }

// function foo() {
//     console.log(this.a);
// }
// var a = 2
// obj.b()
var obj = {
    a: 1,
    b: function () {
        foo()
    }
}

function foo() {
    console.log(this.a);
}
var a = 2
obj.b()