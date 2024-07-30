let promise = new Promise((resolve, reject) => {
  resolve('这次一定')
})

promise.then(
  undefined,
  result => { console.log(result) },
  result => { console.log(result.message); }
)