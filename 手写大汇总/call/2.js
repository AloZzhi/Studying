function fn(a, b, c) {
  console.log(this.clothes, a, b, c);
  return 123
}

const o = {
  clothes: "shirt"
}

Function.prototype.myCall = function (o, arrArgs) {
  o = o || window;
  const newArgs = []
  o.fn = this;
  let res = null
  if (!arrArgs) {
    o.fn()
  } else {
    for (let i = 1; i < arguments.length; i++) {
      newArgs.push("arguments[" + i + "]")
    }
    res = eval("o.fn(" + newArgs + ")")
  }
  delete o.fn;
  return res
}

console.log(fn.myCall(o, 1, 5, 6))

