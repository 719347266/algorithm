function twoSum(nums, target) {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (nums[i] + nums[j] === target && i !== j) return [i, j];
    }
  }
}

console.log(twoSum([3, 2, 4], 6));
