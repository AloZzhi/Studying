//实现koa洋葱模型

let middleware = []
middleware.push((ctx, next) => {
  console.log(1);
  next()
  console.log(2);
})
middleware.push((ctx, next) => {
  console.log(3);
  next()
  console.log(4);
})
middleware.push((ctx, next) => {
  console.log(5);
  next()
  console.log(6);
})


let fn = compose(middleware)
fn()


function compose(middleware) {
  return function fn(context, next) {
    return dispatch(0)

    function dispatch(i) {
      if (i > middleware.length - 1) return
      let fn = middleware[i]  // 取第一个函数
      if (i === middleware.length) fn = next  // 

      const nextFn = dispatch.bind(context, i + 1) // 取第二个函数
      const p = fn(context, nextFn)
      return p
    }

  }
}
