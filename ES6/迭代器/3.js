function createItertor(items) {
  var i = 0;
  return {
    next: function () {
      var done = i >= items.length;
      var value = !done ? items[i++] : undefined
      return {
        done: done,
        value: value
      }
    }
  }
}

// var iterator = createItertor([1, 2, 3])
// for (let value of iterator) {
//   console.log(value);
// }


const obj = {
  value: 1
}

const colors = ['red', 'green', 'blue']
//结构原理

obj[Symbol.iterator] = function () {
  return createItertor([1, 2, 3])
}

for (let value of item) {
  console.log(value);
}