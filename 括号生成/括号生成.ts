var generateParenthesis = function (n: number) {
  let set = new Set(["()"]);
  for (let c = 2; c <= n; c++) {
    let nextSet: Set<string> = new Set();
    for (const s of set) {
      console.log(s, "s");

      for (let j = 0; j <= s.length; j++) {
        // 取每一个位置插入括号
        nextSet.add(s.slice(0, j) + "()" + s.slice(j));
      }
    }
    set = nextSet;
  }
  return [...set];
};

console.log(generateParenthesis(2));
