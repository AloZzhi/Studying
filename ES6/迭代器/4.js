function forOf() {
  if (obj[Symbol.iterator]) {
    throw new TypeError(obj + "is not iterable")
  }
  let iterator = obj[Symbol.iterator]
  let res = iterator.next()
  while (!res.done) {
    cb(res.value)//回调函数
    res = iterator.next()
  }
}

var colors = ['red', 'green', 'blue']

forOf(arr, function (value) {
  console.log(value);
})