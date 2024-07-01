Person.prototype.lastName = 'Park'
Person.prototype.say = function () {
  console.log('hello');
}
function Person(a, b) {
  this.name = 'Peter'
}

let p1 = new Person() //隐式具有 lastName say

console.log(p1.lastName);
p1.say()