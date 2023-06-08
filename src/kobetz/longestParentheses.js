const longestValidParentheses = function (str) {
  const stack = [];

  let max = 0,
    currentCount = 0;

  for (let el of str) {
    if (el == ")") {
      const stackEl = stack.pop();
      if (stackEl == "(") {
        currentCount += 2;

        if (currentCount > max) max = currentCount;
      } else {
        currentCount = 0;
      }
    } else {
      stack.push(el);
    }
  }
  return max;
};

console.log(longestValidParentheses(")()())")); //4
console.log(longestValidParentheses(")()")); //2
