var deleteDuplicates = function (head) {
  let cur = head;
  //还有要遍历的
  while (cur && cur.next) {
    //相等就删掉，把当前节点的 next 指针指向下下个节点，即跳过下一个节点，从而删除了重复元素
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      //不相等则表示前节点是唯一的元素，我们将指针 cur 移动到下一个节点，继续遍历链表
      cur = cur.next;
    }
  }

  return head;
};