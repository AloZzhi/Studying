function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('a is ok');
      reject(2)
    }, 1000)
  })
}

function b() {
  console.log('b is ok');
}

a()
  .then((res) => {
    console.log(res, 'res');
  })
  .catch((err) => {
    console.log(err, "err");
  });