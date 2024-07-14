function Person() {
    // var obj = {
    //   name: '曹总'
    // }
    // Person.call(obj)

    // Object.__proto__ = Person.prototype

    this.name = '曹总'

    // return obj
}

let p = new Person()   // 实例对象
let p2 = new Person()   // 实例对象