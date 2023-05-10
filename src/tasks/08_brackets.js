function isBalanced(string) {
  const brackets = [];

  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    switch (letter) {
      case "{":
      case "[":
      case "(":
        brackets.push(letter);
        break;
      case "}":
      case "]":
      case ")":
        if (brackets.length) {
          const lastEl = brackets.pop();
          if (
            (letter === "}" && lastEl != "{") ||
            (letter === "]" && lastEl != "[") ||
            (letter === ")" && lastEl != "(")
          ) {
            return false;
          }
        } else return false;

      default:
        break;
    }
  }

  return !brackets.length;
}

console.log(isBalanced("(x + y) - (4)")); // -> true
console.log(isBalanced("(((10 ) ()) ((?)(:)))")); // -> true
console.log(isBalanced("[{()}]")); // -> true
console.log(isBalanced("(50)(")); // -> false
console.log(isBalanced("[{]}")); // -> false
