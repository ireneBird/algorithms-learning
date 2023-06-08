var reverseWords = function (s) {
  const arr = s.split(" ").filter((w) => w != "");
  return arr.reverse().join(" ");
};

console.log(reverseWords("  hello world  "));
