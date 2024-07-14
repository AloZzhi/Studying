// var obj = {
//   a: 1,
//   foo: foo//引用
// }

// var obj2 = {
//   a: 2,
//   obj: obj
// }

// function foo() {
//   console.log(this.a);
// }

// obj2.obj.foo()





// var val = 123
// var b = 'abc'

// var o = {  // 对象中的key默认就是字符串
//   a: 1,
//   [b]: val
// }
// console.log(o);



var obj = {
    a: 1,
    foo: foo()
}
function foo() {
    console.log(this.a);
}

// obj.foo()