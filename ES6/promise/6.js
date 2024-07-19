function a() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log('张三户口本');
      resolve('a')
    }, 1000)
  })
}
function b() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log('张三身份证');
      resolve('b')
    }, 1500)
  })
}

function c() {
  console.log('请求张三的出生年月');
}

// Promise.race([a(), b()]).then(() => {//最快的执行完了就运行c,最快的reject就报错
//   c()
// })

// Promise.all([a(), b()]).then(() => {
//   c();
// });

Promise.any([a(), b()]).then(() => {
  c();
});

