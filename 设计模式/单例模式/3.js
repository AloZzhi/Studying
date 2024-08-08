class Person {
  constructor() {
    this.name = 'Tom'
  }
  static getInstance() {
    let instance = null
    return function() {
      if (!instance) {
        instance = new Person()
      }
      return instance
    }
  }
}

const simple = Person.getInstance()
let p1 = simple()
let p2 = simple()

console.log(p1 === p2);