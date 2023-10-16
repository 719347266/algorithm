function twoSum(nums, target) {
  const n = nums.length;
  const map = {};
  for (let i = 0; i < n; i++) {
    const curNum = nums[i];
    const targetNum = target - curNum;
    const targetNumIndex = map[targetNum];
    if (targetNumIndex !== undefined) {
      return [targetNumIndex, i];
    } else {
      map[curNum] = i;
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
