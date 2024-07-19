Parent.prototype.getName = function () {
  return this.name
}
function Parent() {
  this.name = 'JiSung'
  this.like = [1, 2, 3]
}
function Child() {
  Parent.call(this)//把Parent里的this完全指向Child里的this
  this.type = 'children'
}
Child.prototype = new Parent()//原型链继承

let s1 = new Child()

console.log(s1.getName());