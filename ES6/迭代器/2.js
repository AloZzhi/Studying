//可以创建一个可迭代的对象
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

var iterator = createItertor([1, 2, 3])

console.log(iterator.next());//{ done: false, value: 1 }
console.log(iterator.next());//{ done: false, value: 2 }
console.log(iterator.next());//{ done: false, value: 3 }
console.log(iterator.next());//{ done: true, value: undefined }遍历完了

// var arr = []
// arr.iterator = createItertor

var obj = {}
obj.a = createItertor(items)