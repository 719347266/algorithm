function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  for (const token of tokens) {
    if (token === "+") {
      const nums2 = stack.pop()!;
      const nums1 = stack.pop()!;
      stack.push(nums1 + nums2);
    } else if (token === "-") {
      const nums2 = stack.pop()!;
      const nums1 = stack.pop()!;
      stack.push(nums1 - nums2);
    } else if (token === "*") {
      const nums2 = stack.pop()!;
      const nums1 = stack.pop()!;
      stack.push(nums1 * nums2);
    } else if (token === "/") {
      const nums2 = stack.pop()!;
      const nums1 = stack.pop()!;
      stack.push(Math.trunc(nums1 / nums2));
    } else {
      stack.push(Number(token));
    }
  }
  return stack.pop()!;
}
