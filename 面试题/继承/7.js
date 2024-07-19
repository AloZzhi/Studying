class Parent {
  constructor(name) {
    this.name = 'JiSung';
  }
  getName() {
    return this.name;
  }
}

class Child extends Parent {
  constructor() {
    super()
    this.age = 20
  }
}

let c = new Child();

console.log(c.name);