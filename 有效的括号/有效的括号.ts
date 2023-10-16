function isValid(s: string): boolean {
  if (!s.length || s.length === 1) return false;
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const statck: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    if (item === "(" || item === "{" || item === "[") {
      statck.push(item);
    } else {
      const left = statck.pop();
      if (!left) return false;

      if (left === "(" && item !== ")") return false;
      if (left === "{" && item !== "}") return false;
      if (left === "[" && item !== "]") return false;
    }
  }

  return !statck.length;
}

console.log(isValid(")(){}"));
