function a() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log('a is ok');
      reject('a')
    }, 1000)
  })
}
function b() {
  console.log('b id ok');
}


a()
  .then((res) => {
    b()
  })
  .catch((err) => {
    console.log(err);
  })