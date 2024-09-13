// 1. 保存不定长参数
let nums = []
function sum(...args) {
  nums.push(...args)
  //2. 判断参数的个数
  if (nums.length >= 5) {
    //2.1 长度到5  累加reduce
    const res = nums.slice(0, 5).reduce((p, v) => p + v, 0)
    //累加之后要清空数组
    nums = []
    return res
  } else {
    //2.2 长度没到5 返回函数接收余数
    return sum
  }
}

console.log(sum(1,2,6)(3,5));
