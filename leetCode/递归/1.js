//阶乘
function mul(n) {
  let res = 1
  for (let i = 2; i <= n; i++) {
    res = res * i//res*=i
  }
  return res
}

console.log(mul(5));//120