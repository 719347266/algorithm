function lengthOfLongestSubstring(s: string): number {
  let left = 0;
  let right = 0;
  let maxLength = 0;
  const LengthMap = new Map();
  while (right < s.length) {
    left = LengthMap.has(s[right])
      ? Math.max(LengthMap.get(s[right]) + 1, left)
      : left;

    LengthMap.set(s[right], right++);
    maxLength = Math.max(right - left, maxLength);
  }
  return maxLength;
}

console.log(lengthOfLongestSubstring("pwwkew"));
