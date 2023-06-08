function rle(str) {
  let lastEl = str[0];
  let lastIn = 0;

  let ans = [];

  for (let i = 1; i < str.length; i++) {
    if (str[i] !== lastEl) {
      ans.push(pack(lastEl, i - lastIn));
      lastIn = i;
      lastEl = str[i];
    }
  }

  ans.push(pack(lastEl, str.length - lastIn));

  return ans.join("");

  function pack(s, cnt) {
    if (cnt > 1) {
      return s + cnt;
    }

    return s;
  }
}

console.log(rle("AADDWW"));
console.log(rle("AAAAADDWWWWWSSSSXXAQQW")); //A5D2W5S4X2AQ2W
