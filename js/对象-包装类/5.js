var arr = [1, 2, 3, 4, 5]
arr.length = 2
console.log(arr);

var str = 'abcde'
str.length = 2
console.log(str.length);

// new String('abcde').length = 2
// delete new String('abcde').length
// new String('abcde').length




// 面试题
var str = 'abc'
str += 1
var test = typeof (str)
if (test.length == 6) {
  test.sign = 'typeof 的返回结果是String'
}
console.log(test.sign);