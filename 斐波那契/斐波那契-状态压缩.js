function fib(n) {
  if (n <= 1) return n;
  let pre = 0;
  let cur = 1;
  for (let i = 2; i < n; i++) {
    const newValue = pre + cur;
    pre = cur;
    cur = newValue;
  }
  return cur + pre;
}

console.log(fib(10));
