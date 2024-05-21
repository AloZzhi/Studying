let obj = {
  a: 1,
  b: 2,
  c: 3
}

for (let key in obj) {
  console.log(key);//拿到的是键名
  console.log(obj[key]);//得到值
}


