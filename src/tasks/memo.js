function memo(fn) {
  const map = new Map();

  return function (...args) {
    const key = args.join("");
    if (map.has(key)) {
      return map.get(key);
    } else {
      const val = fn(args);
      map.set(key, val);
    }
  };
}

function sum(a, b) {
  return a + b;
}
const memoSum = memo(sum);

memoSum(2, 2);
memoSum(2, 3);
memoSum(2, 2);
memoSum(4, 5);
memoSum(2, 3);
