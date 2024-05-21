let obj = {
  name: 'pingping',
  age: 18,
  like: {
    n: 'coding'
  },
  a: true,
  b: undefined,
  c: null,
  d: Symbol(1),
  f: function () {

  }
}

let obj2 = JSON.parse(JSON.stringify(obj))//读不了 bigInt
obj.like.n = 'studying'//没变，是coding

console.log(obj2);