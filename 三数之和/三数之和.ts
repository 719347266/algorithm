function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  const sortedNums = nums.sort((a, b) => a - b); // 将数组排序

  // 因为是三数之和，所以最后两个数不需要遍历，所以是 sortedNums.length - 2
  for (let i = 0; i < sortedNums.length - 2; i++) {
    // 去重(如果当前值和前一个值相同，跳过
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;

    let left = i + 1;
    let right = sortedNums.length - 1;

    while (left < right) {
      // 计算出当前三个数的和
      const sum = sortedNums[i] + sortedNums[left] + sortedNums[right];

      // 符合条件，将结果放入数组
      if (sum === 0) {
        result.push([sortedNums[i], sortedNums[left], sortedNums[right]]);

        // 判断当前指针指向的值是否和下一个值相同，如果相同，跳过
        while (left < right && sortedNums[left] === sortedNums[left + 1])
          left++;
        while (left > right && sortedNums[right] === sortedNums[right + 1])
          right++;

        // 指针移动
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
