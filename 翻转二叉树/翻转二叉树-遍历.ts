import TreeNode from "../TreeNode";

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return root;
  const stack = [root];
  while (stack.length) {
    const node = stack.pop()!;
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
    const left = node.left;
    node.left = node.right;
    node.right = left;
  }
  return root;
}
