// function Person(name, age) {
//   this.name = name
//   this.age = age
// }
// Person.prototype.say = function() {
//   console.log('hello');
// }
// Person.eat = function() {
//   console.log('I like food');
// }
// Person.prototype.sex = 'girl';
// Person.prototype.addAge = function(){
//   this.age++
// };

// let p = new Person('曹总', 18)
// p.addAge()
// console.log(p);









class Person {
  #count = 1

  constructor(name, age) {
    this.name = name
    this.age = age
    // this.count = 1
  }

  run() {
    console.log('running', this.#count);
  }
  static eat() {
    console.log('I like food');
  }
  get sex() {
    return 'girl'
  }
  set addAge(val) {
    this.age = val
  }
}
let p = new Person('笑笑', 18)
// p.addAge = 20

console.log(p.run());
