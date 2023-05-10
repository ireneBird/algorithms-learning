// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

var reverseString = function (s) {
  let backCursor = s.length - 1;
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    const temp = s[i];
    s[i] = s[backCursor];
    s[backCursor] = temp;
    backCursor--;
  }
  return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
