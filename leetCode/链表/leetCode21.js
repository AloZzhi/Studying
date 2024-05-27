var mergeTwoLists = function (val, next) {
  function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
};
var mergeTwoLists = function (list1, list2) {
  let head = new ListNode()
  let cur = head //保留head结点

  while (list1 && list2) {//两链表都有值
    //比较节点的值
    if (list1.val <= list2.val) {
      //list1的值小于list2
      cur.next = list1//头结点用list1的
      list1 = list1.next//list1 现在从第二个结点开始
    } else {//list2更小
      cur.next = list2//头结点用list2的
      list2 = list2.next
    }
    cur = cur.next //每循环一次，cur都要代表下一个结点，cur最后代表的是结尾的结点
  }

  if (list1) {//最后两个链表可能会有一个链表还没有合并到，还有的结点没走到
    cur.next = list1//因为链表是有序的，后面的结点不用再判断了
  } else {
    cur.next = list2
  }//这段可以用三元运算符写成cur.next = list1 !== null ? list1 : list2
  return head.next
};

list1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null
    }
  }
}