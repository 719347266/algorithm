function fib(n) {
  if (n <= 1) return n;
  const dp = [0, 1];
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n - 1] + dp[n - 2];
}

console.log(fib(5));
