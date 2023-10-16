function climbStairs(n) {
  if (n <= 2) return n;

  // 设置初始值
  let pre = 1;
  let cur = 1;
  for (let i = 1; i < n; i++) {
    const newValue = pre + cur;
    pre = cur;
    cur = newValue;
  }

  return cur;
}

console.log(climbStairs(5));
