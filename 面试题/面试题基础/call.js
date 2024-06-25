// let obj = {
//   a: 1
// }

// function foo() {
//   console.log(this.a);//this要看怎么调用的 ,,,要看绑定规则（这里是window）打印undefinded
// }

// foo()//独立调用，触发了默认绑定规则

// var let  会添加到window对象上
// const 不会

// let obj = {
//   a: 1
// }

// function foo() {
//   console.log(this.a)
// }

// foo.call(obj)//call把this强行绑定到obj

//.call()，你可以确保函数中的 this 指向正确的对象，从而避免常见的作用域问题

let obj = {
  a: 1,
  b: foo//应用  b:foo()调用
}

function foo() {
  console.log(this.a)
}

obj.b()//隐式绑定


Function.prototype.call2 = function(obj){

}