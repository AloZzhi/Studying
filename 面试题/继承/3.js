Parent.prototype.getName = function () {
  return this.name
}
function Parent() {
  this.name = 'JiSung'
  this.like = [1, 2, 3]
}
function Child() {
  Parent.call(this)
  this.type = 'children'
}
Child.prototype = new Parent()

let s1 = new Child()
console.log(s1.getName());

