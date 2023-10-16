function longestCommonPrefix(strs: string[]): string {
  let prefix = strs[0];
  for (let i = 0; i < strs.length; i++) {
    const s = strs[i];
    while (s.indexOf(prefix) !== 0) {
      prefix = prefix.substring(prefix.length - 1, 0);
    }
  }
  return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
