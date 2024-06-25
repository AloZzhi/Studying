function instance(l, r) {
  while (l) {
    l = l.__proto__
    if (l === r.prototype) {
      return ture
    }
    l = l.__proto__//隐式原型天花板为null
  }
  return false
}

console.log(instance([], Array));
console.log(instance({}, Object));
console.log(instance([], Object));//[].__proto__.__proto__=Object.prototype

let a = []


function Person() {
  // var obj = {
  //   name='笑笑'
  // }
  // Person.call(obj)
  // obj.__proto__ = Person.prototype
  // return obj


  this.name = '笑笑'//obj.name='笑笑'
}
let p = new Person()
console.log(p);

// 实例对象的隐式原型等于构造函数的显示原型