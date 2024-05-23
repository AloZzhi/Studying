const user = {
  name: {
    firstName: 'Alo',
    lastName: '365'
  },
  age: 19
}

function deep(obj) {
  let newObj = {}


  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {//判断是否为显示属性
      if (obj[key] instanceof Object) {//typeof (obj[key]) === 'object'&& obj[key] !== null
        newObj[key] = deep(obj[key])//递归  --自己调用自己
      } else {
        newObj[key] = obj[key]
      }

    }
  }
  return newObj
}

console.log(deep(user));