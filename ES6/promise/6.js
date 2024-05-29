function a() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log('a is ok');
      resolve('a')
    }, 1000)
  })
}
function b() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log('b is ok');
      reject('b')
    }, 500)
  })
}

function c() {
  console.log('c is ok');
}

// Promise.race([a(), b()]).then(() => {//最快的执行完了就运行c,最快的reject就报错
//   c()
// })

Promise.all([a(), b()]).then(() => {
  c();
});

Promise.any([a(), b()]).then(() => {
  c();
});

