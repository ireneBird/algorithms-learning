var isSquare = function (n) {
  if (n < 0) return false;

  const sqrt = Math.sqrt(n);
  console.log(sqrt);

  return Number.isInteger(sqrt);
};

// console.log(isSquare(0));
// console.log(isSquare(3));

function getGrade(s1, s2, s3) {
  let score = (s1 + s2 + s3) / 3;

  if (score < 60) {
    return "F";
  } else if (60 <= score && score < 70) {
    return "D";
  } else if (70 <= score && score < 80) {
    return "C";
  } else if (80 <= score && score < 90) {
    return "B";
  } else if (90 <= score && score <= 100) {
    return "A";
  }
}

// console.log(getGrade(95, 90, 93));
// console.log(getGrade(100, 85, 96));
// console.log(getGrade(92, 93, 94));

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  if (target < arr[start] || target > arr[end]) return -1;

  while (true) {
    const middle = Math.floor((start + end) / 2);

    if (arr[middle] == target) return middle;

    if (start > end) return -1;

    if (target > arr[middle]) {
      start = middle + 1;
    } else if (target < arr[middle]) {
      end = middle - 1;
    }
  }
}

// const res = binarySearch([2, 4, 6, 75, 95, 200], 4);
// console.log(res);
var arr = ["A", "A", "B", "B", "D", "D", "C", "C", "C"];
var inputs = ["C", "B"];
function search(arr, inputs) {
  const res = {};

  for (const letter of arr) {
    if (inputs.includes(letter)) {
      if (res[letter]) res[letter]++;
      else {
        res[letter] = 1;
      }
    }
  }

  return res;
}
let res = search(arr, inputs);
// console.log(res.B);
// console.log(res.C);

var arr = ["A", "A", "B", "B", "C", "D", "D", "B", "C", "C", "C", "B", "C"];
var inputs = ["B", "C"];

function searchPattern(arr, pattern) {
  let strPattern = pattern.join("");
  let str = arr.join("");

  return str.match(new RegExp(`(${strPattern})`, "g")).length;
}
// let count = searchPattern(arr, inputs);
// console.log(count); //3

function rle(str) {
  let res = "";
  let lastEl = str[0];
  let elIndex = 0;

  for (let i = 1; i < str.length; i++) {
    if (str[i] !== lastEl) {
      pack(lastEl, i - elIndex);
      lastEl = str[i];
      elIndex = i;
    }
  }

  pack(lastEl, str.length - elIndex);

  return res;

  function pack(s, count) {
    res += count > 0 ? s + count : s;
  }
}
// console.log(rle("AAAvvvvRR"));
