import TreeNode from "../TreeNode";

function isValidBST(root: TreeNode | null): boolean {
  function dfs(root: TreeNode | null, minVal: number, maxVal: number): boolean {
    if (!root) return true;

    if (root.val <= minVal || root.val >= maxVal) return false;
    return (
      dfs(root.left, minVal, root.val) && dfs(root.right, root.val, maxVal)
    );
  }

  return dfs(root, -Infinity, Infinity);
}
