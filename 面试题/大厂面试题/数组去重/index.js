const arr = [
  { name: '1', age: 100 },
  { name: '2', age: 20 },
  { name: '3', age: 30 },
  { name: '4', age: 40 },
  { name: '4', age: 40 }
]

// const newArr = [...new Set(arr)]
// console.log(newArr)

function uniqueArr(arr) {
  let res = []
  for (let i = 0; i < arr.length; i++) {

    let isFind = false
    for (let j = 0; j < res.length; j++) {
      if (equals(arr[i], res[j])) {
        isFind = true
        break;
      }
    }
    if (!isFind) {
      res.push(arr[i])
    }
  }
}

function equals(v1, v2) {
  if ((typeof v1 === 'object' && v1 !== null) && (typeof v2 === 'object' && v2 !== null)) {
    for (let key in v1) {
      if (v2.hasOwnProperty(key)) {
        equals(v1[key], v2[key])
      } else {
        return false
      }
    }
    return true
  } else {
    return v1 === v2
  }
}

