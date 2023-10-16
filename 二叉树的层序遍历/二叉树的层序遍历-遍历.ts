import TreeNode from "../二叉搜索树中的搜索/TreeNode";

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  const result: number[][] = [];
  const stack: TreeNode[] = [root];
  while (stack.length) {
    const len = stack.length;
    const temp: number[] = [];
    // 将加入的左右子树全部出栈
    for (let i = 0; i < len; i++) {
      const node = stack.shift()!;

      temp.push(node.val);

      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
    }
    result.push(temp);
  }
  return result;
}

const Tree: TreeNode = {
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null,
  },
  right: {
    val: 20,
    left: {
      val: 15,
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

console.log(levelOrder(Tree));
