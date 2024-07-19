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
Child.prototype = Object.create(Parent.prototype)  //new Parent()
Child.prototype.constructor = Child


let s1 = new Child()
let s2 = new Child()
