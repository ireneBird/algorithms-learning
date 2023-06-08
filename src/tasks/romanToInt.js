function romanToInt(s) {
  const table = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let res = 0;
  for (let i = 0; i < s.length; i++) {
    const cur = table.get(s[i]);
    const next = table.get(s[i + 1]) | 0;

    if (cur >= next) {
      res += cur;
    } else {
      res -= cur;
    }
  }

  return res;
}

// console.log(romanToInt("MCMXCIV"));

function intToRoman(num) {
  let res = "";
  const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const rom = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  for (let i = 0; num; i++) {
    while (num > val[i]) {
      res += rom[i];
      num -= val[i];
    }
  }

  return res;
}

console.log(intToRoman(23800));
