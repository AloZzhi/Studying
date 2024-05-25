var mergeTwoLists = function (val, next) {
  function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
};
var mergeTwoLists = function (list1, list2) {
  let head = new ListNode()
  let cur = head
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      cur.next = list1
      list1 = list1.next
    } else {
      cur.next = list2
      list2 = list2.next
    }
    cur = cur.next
  }

  // if(list1){
  //     cur.next = list1
  // }else{
  //   cur.next = list2
  // }
  cur.next = list1 !== null ? list1 : list2

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