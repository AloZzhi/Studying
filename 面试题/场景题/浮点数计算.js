function add(...args) { // args是数组
  // 整数
  // console.log(args);
  const maxLen = Math.max.apply(null, args.map(item => {
      const str = item.toString().split('.')[1]
      return str ? str.length : 0      
  }))

  const base = 10 ** maxLen
  const res = args.reduce((pre, item, i, arr) => {
      return pre + item * base
  }, 0)

  return res / base
}
console.log(add(0.1, 0.2));
