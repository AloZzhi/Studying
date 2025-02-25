//在规定的时间内没有第二次执行，则触发
function debounce(fn) {
  var timer = null
  return function () {
    clearTimeout(timer)

    timer = setTimeout(() => {
      fn.apply(this)
    }, 1000)
  }
}

//不管触发了多少次，在规定时间内只执行一次
function throttle(fn) {
  let pre = Date.now()

  return function () {
    let now = Date.now()
    if (now - pre >= 1000) {
      fn.apply(this)
      pre = now
    }
  }
}