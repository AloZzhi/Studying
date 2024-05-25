var deleteNode = function (head, val) {
  let cur = head;
  while (cur && cur.next) {
    if (cur.next.val == cur.val) {
      // cur就是要被移除的节点
      cur.next = cur.next.next;
    } else {
      // 当前节点的下一个节点与当前节点的值不相等，继续向后遍历
      cur = cur.next;
    }
  }
  return head;
};

val = 5



head = {
  val: 4,
  next: {
    val: 1,
    next: {
      val: 5,
      next: {
        val: 9,
        next: null
      }
    }
  }
}