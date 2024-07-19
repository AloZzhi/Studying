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
  return clone
}

let child = xxx(parent)