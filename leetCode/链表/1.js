let lb = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: nul
      }
    }
  }
}

// lb.next.next.val


function ListNode(val) {
  this.val = val
  this.next = null
}

const node = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)
const node4 = new ListNode(4)
const node5 = new ListNode(5)


const node6 = new ListNode(6)
node6.next = node4
node3.next = node6
// //植入链表
node.next = node2

// const node3 = new ListNode(3)
node3.next = node2
node.next = node3

移除节点

// const node = new ListNode(1)
// const node2 = new ListNode(2)
// const node3 = new ListNode(3)

// node.next = node3 //重新赋值 1-->3
   

//头部增加节点
//创建一个节点，新创建的结点指针指向链表第一位
//尾部增加节点
//一路找，找到链表尾部的节点然后再让它的指针指向这个新结点