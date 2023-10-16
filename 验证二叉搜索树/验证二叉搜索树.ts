import TreeNode from "../TreeNode";

function isValidBST(root: TreeNode | null): boolean {
  let stack = [];
  let inorder = -Infinity;
  console.log(inorder);
  return true;
}

const tree: TreeNode = {
  val: 5,
  left: {
    val: 4,
    left: null,
    right: null,
  },
  right: {
    val: 6,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};
// const tree: TreeNode = {
//   val: 2,
//   left: {
//     val: 2,
//     left: null,
//     right: null,
//   },
//   right: {
//     val: 2,
//     left: null,
//     right: null,
//   },
// };

console.log(isValidBST(tree));
