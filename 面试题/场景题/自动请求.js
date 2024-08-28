// 发送一个请求，如果改请求失败，自动发送第二次，第三次。。。
// 直到请求成功或达到规定的次数就停止

function getData() {
  console.log('请求发送中');
  const n = Math.random()
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n > 0.5) {
        resolve(n)
      } else {
        reject(n)
      }
    }, 1000)
  })
}


// getData()

function again(promiseFn, times = 5) {
  let err = null
  return new Promise(async (resolve, reject) => {
    while (times) {
      try {
        let ret = await promiseFn()
        resolve(ret)
        break;
      } catch (error) {
        times -= 1
        err = error
      }
    }
    
    if (!times) {
      reject(err)
    }


    // try {
    //   let ret = await promiseFn()
    //   resolve(ret)
    // } catch (error) { // 上一次请求失败了
    //   times--
    //   if (times) {
    //     again(promiseFn, times)
    //   } else {
    //     reject(error)
    //   }
    // }

  })
}

again(getData)
  .then(res => {
    console.log(`请求成功：${res}`);
  })
  .catch(err => {
    console.log(`请求失败：${err}`);
  })