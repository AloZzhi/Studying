function red() {
  console.log('红色');
}
function green() {
  console.log('绿色');
}
function yellow() {
  console.log('黄色');
}

function timePromise(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, time);
  })
}

async function changeColor(time, fn) {
  fn()
  await timePromise(time)
}



async function run() {
  while (true) {
    await changeColor(3000, red)
    await changeColor(2000, green)
    await changeColor(1000, yellow)
  }

}

run()




// const res = await axios.get('http://localhost:8080/home')
// console.log(res);