let s = '(){}[]]}'   // '()'

// 123456  654321
// ({[]})  )}][{(


var isValid = function (s) {

  const leftToRight = {   // leftToRight[s[i]]
    '(': ')',
    '{': '}',
    '[': ']'
  }

  const stack = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(' || s[i] == '[' || s[i] == '{') {
      // 将它期许的另一半入栈  s[i]
      let self = s[i]
      stack.push(leftToRight[self])
    } else { // 右括号
      // 此时的右括号和栈顶的元素比较
      let r = s[i]
      let top = stack.pop()
      if (r !== top) {
        return false
      }

    }
  }

  return !stack.length
}