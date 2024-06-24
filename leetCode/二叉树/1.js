function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

const node = new TreeNode(1)

const node2 = new TreeNode(2)
const node3 = new TreeNode(3)
node.left = node2
node.right = node3


const root = {
  val: 'A',
  left: {
    val: 'B',
    left: {
      val: 'D',
      left: {
        val: 'H',
      },
      right: {
        val: 'I'
      }
    },
    right: {
      val: 'E',
      right: {
        val: 'J'
      }

    }
  },
  right: {
    val: 'C',
    left: {
      val: 'F',
      right: {
        val: 'K'
      }
    },
    right: {
      val: 'G'
    }
  }
}

// function preorder(root) {
//   if (!root) {
//     return
//   }
//   console.log(root.val);
//   preorder(root.left)
//   preorder(root.right)
// }

// preorder(root)

// function inorder(root) {
//   if (!root) {
//     return
//   }
//   inorder(root.left)
//   console.log(root.val)
//   inorder(root.right)
// }
// inorder(root)


function lastorder(root) {
  if (!root) {
    return
  }
  lastorder(root.left)
  lastorder(root.right)
  console.log(root.val)

}
lastorder(root)