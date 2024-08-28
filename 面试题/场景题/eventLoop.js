setImmediate(() => {
  console.log(1);
}, 0)
setTimeout(() => {
  console.log(2);
}, 0)
new Promise((resolve, reject) => {
  console.log(3);
  resolve()
  console.log(4);
}).then(() => {
  console.log(5);
})
async function test() {
  const a = await 9
  console.log(a);
  const b = await new Promise((resolve) => {
    resolve(10);
  })
  console.log(b);
}
test()
console.log(6);
process.nextTick(() => {
  console.log(7);
})
console.log(8);