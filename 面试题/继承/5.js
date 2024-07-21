let parent = {
  name: 'JiSung',
  age: 22,
  like: [1, 2]
}

function clone(obj) {
  let clone = Object.create(obj)
  clone.getLike = function () {
    return this.like
  }
  clone.sex = '男'
  return clone
}

let child = clone(parent)
console.log(child);