// function Person(name, age) {
//   this.name = name
//   this.age = age
// }
// Person.prototype.say = function () {
//   console.log('hello');
// }
// let p = new Person('朴志晟', 22)

// console.log(p.say());

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age


  }




  run() {
    console.log('running');
  }

  static eat() {
    console.log('I like food');
  }
}
let p = new Person('崔杋圭', 23)
// console.log(p);
p.run()
p.eat()// p.eat is not a function