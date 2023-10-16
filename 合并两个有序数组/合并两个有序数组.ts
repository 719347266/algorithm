function merge(nums1: number[], m: number, num2: number[], n: number) {
  const newNums1 = Array(m + n).fill(0);
  let n1 = 0;
  let n2 = 0;
  let current;
  while (n1 < m || n2 < n) {
    if (n1 === m) {
      current = num2[n2++];
    } else if (n2 === n) {
      current = nums1[n1++];
    } else if (nums1[n1] < num2[n2]) {
      current = nums1[n1++];
    } else {
      current = num2[n2++];
    }
    newNums1[n1 + n2 - 1] = current;
  }
  for (let i = 0; i <= m + n; ++i) {
    nums1[i] = newNums1[i];
  }
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

// n1 = 2, n2 = 1, current = [3 - 1]
// [1, 2, 3, 0, 0, 0]
// [2, 5, 6, 7];
