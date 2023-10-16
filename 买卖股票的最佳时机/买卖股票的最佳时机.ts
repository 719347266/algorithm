function maxProfit(prices: number[]): number {
  let a = 0,
    b = prices[0];
  for (let i = 1; i < prices.length; i++) {
    b = Math.min(b, prices[i]);
    a = Math.max(a, prices[i] - b);
  }
  return a;
}
