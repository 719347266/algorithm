/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 入参是一个数组
const permute = function (nums) {
  const length = nums.length;

  // 当前排列数组
  const current = [];

  // 结果数组
  const res = [];

  // 记录对象
  const result = {};

  function dfs(nth) {
    // nth 等于 数组长度时
    if (nth === length) {
      res.push(current.slice());
      return;
    }
    for (let i = 0; i < length; i++) {
      if (!result[nums[i]]) {
        result[nums[i]] = 1;

        current.push(nums[i]);

        dfs(nth + 1);

        current.pop();
        result[nums[i]] = 0;
      }
    }
  }
  dfs(0);
  return res;
};

console.log(permute([1, 2, 3]));
