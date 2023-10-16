function maxSubArray(nums: number[]): number {
  let res = nums[0];
  let pre = nums[0];

  for (let i = 1; i < nums.length; i++) {
    pre = Math.max(pre + nums[i], nums[i]);
    res = Math.max(res, pre);
  }

  return res;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

export {};
