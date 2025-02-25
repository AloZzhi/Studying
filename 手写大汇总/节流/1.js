function throttle(fn, delay) {
  let timer = Date.now();
  return function(...args) {
    if (Date.now() - timer > delay) {
      timer = Date.now()
      return fn.apply(this, args)
    }
  }
}

const throttled = throttle(() => {
  console.log('throttled')
}, 1000)
for(let i = 0; i < 10; i++) {
  setTimeout(() => {
    throttled()
  }, 500 * i)
}
