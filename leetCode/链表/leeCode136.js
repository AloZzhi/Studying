var deleteNode = function (head, val) {
  let cur = head;
  if (cur.val === val) {//要移除的是头结点
    head = head.next
  }
  while (cur && cur.next) {
    if (cur.next.val === val) {
      // cur就是要被移除的节点
      cur.next = cur.next.next;
    }
    // 当前节点的下一个节点与当前节点的值不相等，继续向后遍历
    cur = cur.next;

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