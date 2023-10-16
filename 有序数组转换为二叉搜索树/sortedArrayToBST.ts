import TreeNode from "../TreeNode";

function sortedArrayToBST(nums: number[]): TreeNode | null {
  // 处理边界条件
  if (!nums.length) {
    return null;
  }

  const root = dfs(0, nums.length - 1);

  function dfs(start: number, end: number): TreeNode | null {
    // 当 low > high 时，意味着当前范围的数字已经被递归处理完全了
    if (start > end) {
      return null;
    }
    const mind = Math.floor(start + (end - start) / 2);

    const tree = new TreeNode(nums[mind]);

    tree.left = dfs(start, mind - 1);
    tree.right = dfs(mind + 1, end);

    return tree;
  }

  return root;
}
