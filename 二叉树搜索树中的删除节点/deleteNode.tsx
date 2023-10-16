import TreeNode from "../TreeNode";

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) return root;

  // 如果找到了当前要删除的节点
  if (root.val === key) {
    // 判断是否有左子节点
    if (!root.left && !root.right) {
      root = null;
    } else if (root.left) {
      const maxVal = findMax(root.left);

      root.val = maxVal.val;

      root.left = deleteNode(root.left, maxVal.val);

      // 有右节点
    } else if (root.right) {
      const minVal = findMin(root.right);

      root.val = minVal.val;

      root.right = deleteNode(root.right, minVal.val);
    }
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
  }

  return root;
}

// 寻找左子树最大值
function findMax(root: TreeNode) {
  while (root.right) {
    root = root.right;
  }
  return root;
}

// 寻找右子树的最小值
function findMin(root: TreeNode) {
  while (root.left) {
    root = root.left;
  }
  return root;
}
