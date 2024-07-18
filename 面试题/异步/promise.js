function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('a is ok');
      resolve(1)
    }, 1000)
  })
}

function b() {
  console.log('b is ok');
}

a()
  .then(
    (res) => {
      console.log(res, '++++');
    },
    (err) => {
      console.log(err, '----');
    }

  )
  .catch((res) => {

  })