function maxSubArray(nums: number[]): number {
  const dp = [];
  dp[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (dp[i - 1] > 0) {
      dp[i] = dp[i - 1] + nums[i];
    } else {
      dp[i] = nums[i];
    }
  }

  return Math.max(...dp);
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
