const maxSlidingWindow = function (nums: number[], k: number) {
  let left = 0;

  let right = k - 1;

  const res = [];

  while (right < nums.length) {
    const max = calMax(nums, left, right);
    console.log(max);

    res.push(max);

    left++;
    right++;
  }

  return res;
};

// 这个函数用来计算最大值
function calMax(arr: number[], left: number, right: number) {
  // 处理数组为空的边界情况
  if (!arr || !arr.length) {
    return;
  }
  // 初始化 maxNum 的值为窗口内第一个元素
  let maxNum = arr[left];
  // 遍历窗口内所有元素，更新 maxNum 的值
  for (let i = left; i <= right; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  // 返回最大值
  return maxNum;
}
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
export = {};
