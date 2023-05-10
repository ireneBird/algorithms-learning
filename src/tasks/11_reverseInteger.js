var reverse = function (x) {
  let ans = "";
  const arr = Array.from(String(x));
  console.log(arr);
  if (arr[0] == "-") {
    arr.splice(0, 1);
    ans = "-";
  }

  ans += arr.reverse().join("");

  if ((+ans <= -2) ^ 31 && +ans >= (2 ^ (31 - 1))) return 0;
  return +ans;
};

console.log(reverse(-123));
console.log(reverse(120));
