import TreeNode from "../TreeNode";

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return root;

  function invert(node: TreeNode | null) {
    if (!node) return;
    invert(node.left);
    invert(node.right);
    const temp = node.left;
    node.left = node.right;
    node.right = temp;
  }

  invert(root);

  return root;
}
