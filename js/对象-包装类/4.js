// 包装类

// 原始值是不能拥有属性和方法的。属性和方法是对象独有的
var num = 123
num.abc = 'hello'
console.log(num.abc);


// 包装类  --- 这个隐式的过程
// new Number(123).abc = 'hello'
// delete new Number(123).abc
// console.log(num.abc);





var str = 'abcd'
console.log(str.length);

// var str = new String('abcd')
str.length = xxx

