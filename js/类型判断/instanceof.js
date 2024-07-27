let s = '123' //String
let n = 123 //number
let f = true //boolean
let u = undefined //undefined
let nu = null //null
let sy = Symbol(123) // Symbol创建一个独一无二的值
let big = 1234n //Bigint 大整型 超过2的53次方

let obj = {}
let arr = []
let fn = function () { }//函数体也是一个对象
let date = new Date();//特殊类型,特殊对象

// console.log(obj instanceof Object); // true
// console.log(arr instanceof Array);  // true
// console.log(date instanceof Date);  // true
// console.log(fn instanceof Function); // true

// console.log(arr instanceof Object);


// console.log(s instanceof String);
// console.log(n instanceof Number);
// arr._proto_ =Array.prototype函数显示原型 还是对象
//Array.prototype._proto_ = Object.prototype

function Person() {}
var p = new Person();
console.log( p instanceof Person);  // true
console.log(p instanceof Object);  // true