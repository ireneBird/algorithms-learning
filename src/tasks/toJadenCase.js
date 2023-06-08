String.prototype.toJadenCase = function () {
  console.log(this.valueOf());
  const str = this.valueOf();
  return str
    .split(" ")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");
};

// var str = "How can mirrors be real if our eyes aren't real";
// console.log(str.toJadenCase());
