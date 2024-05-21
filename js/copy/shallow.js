let obj = {
  name: 'Alo',
  like: {
    a: 'food'
  }
}

// function shallow(obj) {
//   let newObj = {}
//   for (let key in obj) {
//     newObj[key] = obj[key]
//   } //遍历对象  ---隐式具有的属性不拷贝 
//   return newObj
// }

function shallow(obj) {
  let newObj = {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {//判断是否为显示属性
      newObj[key] = obj[key]
    }

  } //遍历对象  ---隐式具有的属性不拷贝 
  return newObj
}

console.log(shallow(obj));//{xxx}