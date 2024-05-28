var [a, b] = [1, 2]


Object.prototype[Symbol.iterator] = function () {
  return Object.values(this)[Symbol.iterator]()//一个可迭代的对象
}
var [a, b] = { a: 1, b: 2 }//new Object()


console.log(a, b);