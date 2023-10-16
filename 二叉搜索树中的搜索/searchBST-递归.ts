import TreeNode from "./TreeNode";

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (root === null || root.val === val) return root;
  if (root.val > val) {
    return searchBST(root.left, val);
  } else if (root.val < val) {
    return searchBST(root.right, val);
  } else if (root.val === val) {
    return root;
  } else {
    return null;
  }
}
