function findTwoMax(arr) {
  let max1 = Math.max(arr[0], arr[1]);
  let max2 = Math.min(arr[0], arr[1]);

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > max1) {
      max2 = max1;
      max1 = arr[i];
    } else if (arr[i] > max2) {
      max2 = arr[i];
    }
  }

  return [max1, max2];
}

console.log(findTwoMax([2, 1, 5, 1]));
console.log(findTwoMax([-2, -1, -5, -1]));
console.log(findTwoMax([1, 3, 5, 5]));
