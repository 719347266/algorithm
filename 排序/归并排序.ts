function mergeSort(arr: number[]) {
  if (!arr || arr.length <= 1) return arr;

  const len = arr.length;

  // 计算分割点
  const mid = Math.floor(len / 2);

  const left: number[] = mergeSort(arr.slice(0, mid));
  const right: number[] = mergeSort(arr.slice(mid, len));

  return mergeArr(left, right);
}

function mergeArr(arr1: number[], arr2: number[]) {
  // 初始化两个指针，分别指向 arr1 和 arr2
  let i = 0,
    j = 0;
  // 初始化结果数组
  const res: number[] = [];
  // 缓存arr1的长度
  const len1 = arr1.length;
  // 缓存arr2的长度
  const len2 = arr2.length;
  // 合并两个子数组
  while (i < len1 && j < len2) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }
  // 若其中一个子数组首先被合并完全，则直接拼接另一个子数组的剩余部分
  if (i < len1) {
    return res.concat(arr1.slice(i));
  } else {
    return res.concat(arr2.slice(j));
  }
}

console.log(mergeSort([9, 123, 43, 4546, 4567, 5768, 768, 9, 1]));
