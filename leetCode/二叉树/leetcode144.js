let root = {
  val: 1,
  right: {
    val: 2,
    left: {
      val: 3
    }
  }
}

var preorderTraversal = function (root) {
  if(!root){
    return[]
}
  const res = []
  const stack = []
  stack.push(root)
  while (stack.length) {
    const cur = stack.pop()
    res.push(cur.val)
    if (cur.right) {
      stack.push(cur.right)
    }
    if (cur.left) {
      stack.push(cur.left)
    }
  }
  return res
}

console.log(preorderTraversal(root));