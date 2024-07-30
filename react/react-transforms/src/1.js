async function m1() {
  return 1;
}

//async promise实例
async function m2() {
  const n = await m1();
  console.log(n);
  return 2;
}

async function m3() {
  //await
  const n = m2();
  console.log(n, '???');
  //event loop微任务
  return 3;
}

m3().then((n) => {
  console.log(n, '////');
});

m3();

console.log(4);
