function Parent() {
  this.name = 'JiSung'
  this.like = [1, 2, 3]
}
function Child() {
  this.type = 'children'
}
Child.prototype = new Parent()//原型链继承

let s1 = new Child()
let s2 = new Child()//地址不同，和s2不是同一个对象

console.log(s1.name);//JiSung