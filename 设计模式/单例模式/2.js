class Person {
  constructor() {
    this.name = 'Tom'
  }
  static getInstance() {
    if (!Person.instance) {
      Person.instance = new Person()
    }
    return Person.instance
  }
}

let p1 = Person.getInstance()
let p2 = Person.getInstance()

console.log(p1 === p2);