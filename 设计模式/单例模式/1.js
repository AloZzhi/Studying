function Person() {
  // let obj = {   // 1
  //   name: 'Tom'
  // }
  // Person.call(obj) // 2
  // obj.__proto__ = Person.prototype  // 4
  // return obj  // 5


  this.name = 'Tom'  // 3
}
Person.insance = 'sss'
Person.prototype.insance2 = 'hello'

let p1 = new Person()
let p2 = new Person()

// console.log(p1 === p2);
console.log(p1.insance2);

// p1.__proto__ === Person.prototype
