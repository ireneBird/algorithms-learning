function twoSum(nums, target) {
  const cache = new Set();

  let skip = 1;

  for (let i = 0; i < nums.length; i++) {
    const el1 = nums[i];

    if (el1 > target || cache.has(el1)) continue;

    for (let j = skip; j < nums.length; j++) {
      const el2 = nums[j];

      if (el1 + el2 == target) {
        return [i, j];
      }
    }

    skip++;
    cache.add(el1);
  }

  return [];
}

console.log(twoSum([1, 2, 3], 5));
console.log(twoSum([2, 1, 3, 5, 4], 9));
console.log(twoSum([2, 2], 4));
