function breakfast() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('现在是早上');
      resolve('吃早饭！')
    }, 2000)
  })

}

function lunch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('到中午了');
      resolve('吃午饭！')
    }, 1000)
  })
}

function dinner() {
  console.log('晚上减肥不吃了！');
}

breakfast()
  .then((res) => {
    console.log(res);
    return lunch()//return给then
  })
  .then((res2) => {
    console.log(res2);
    dinner()
  })