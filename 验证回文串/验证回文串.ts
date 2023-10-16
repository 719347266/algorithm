function isPalindrome(s: string): boolean {
  if (!s.length) return true;

  s = s.toLocaleLowerCase().replace(/[\W_]/gi, "");

  console.log(s);

  let startIndex = 0;
  let endIndex = s.length - 1;

  while (startIndex < endIndex) {
    if (s[startIndex] === s[endIndex]) {
      startIndex++;
      endIndex--;
    } else {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome("race a car"));
