function arraySubset(source, subset) {
  if (source.length < subset.length) return false;

  const str1 = source.sort((a, b) => a - b).join("");
  const str2 = subset.sort((a, b) => a - b).join("");

  if (str1.includes(str2)) return true;

  return false;
}

console.log(arraySubset([2, 1, 3], [1, 2, 3])); // -> true
console.log(arraySubset([2, 1, 1, 3], [1, 2, 3])); // -> true
console.log(arraySubset([1, 1, 1, 3], [1, 3, 3])); // -> false
console.log(arraySubset([1, 2], [1, 2, 3])); // -> false
