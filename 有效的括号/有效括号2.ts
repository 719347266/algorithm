function isValid(s: string): boolean {
  if (!s.length || s.length === 1) return false;
  const length = s.length;
  const stack = [];
  for (let i = 0; i < length; i++) {
    const item = s[i];
    if (item === "(" || item === "{" || item === "[") {
      stack.push(item);
    } else {
      const left = stack.pop();
      if (!left) return false;

      if (left === "{" && item !== "}") return false;
      if (left === "(" && item !== ")") return false;
      if (left === "[" && item !== "]") return false;
    }
  }
  return !stack.length;
}

console.log(isValid(")(){}"));
