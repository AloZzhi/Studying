let n = 89749876543576543
let m = 3456789876543

function sum(a, b) {
  a = a.toString()
  b = b.toString()

  const len = Math.max(a.length, b.length)
  a = a.padStart(len, '0')
  b = b.padStart(len, '0')

  let res = ''
  let carry = 0
  for (let i = len - 1; i >= 0; i--) {
    // a[i] b[i]
    const num = (+a[i]) + (+b[i]) + carry
    carry = Math.floor(num / 10)
    res = (num % 10) + res

  }

  if (carry) {
    res = '1' + res
  }
  return res
}

console.log(sum(n, m));
