import TreeNode from "./TreeNode";

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (root === null || root.val === val) return root;
  let current = root;
  while (current) {
    if (current.val > val) {
      current = current.left!;
    } else if (current.val < val) {
      current = current.right!;
    } else {
      return current;
    }
  }
  return null;
}
