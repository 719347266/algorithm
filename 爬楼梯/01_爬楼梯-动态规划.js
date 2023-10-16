function climbStairs(n) {
  if (n <= 2) return n;
  const dp = [1, 2];
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }

  return dp[n - 1];
}

console.log(climbStairs(5));
