function fibonacci(n) {
  let ans = [1];
  while (ans.length !== n) {
    const sum = ans[ans.length - 1] + (ans[ans.length - 2] || 0);
    ans.push(sum);
  }
  return ans;
}

console.log(fibonacci(8)); // -> [1, 1, 2, 3, 5, 8, 13, 21]
