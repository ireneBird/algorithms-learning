function binarySearch<T>(arr: Array<T>, target: T) {
  let start = 0;
  let end = arr.length - 1;

  if (target < arr[start] || target > arr[end]) return -1;

  while (true) {
    if (target === arr[start]) return start;
    if (target === arr[end]) return end;

    if (start > end) {
      return -1;
    }

    const middle = Math.floor((start + end) / 2);

    if (target < arr[middle]) {
      end = middle - 1;
    } else if (target > arr[middle]) {
      start = middle + 1;
    } else {
      return middle;
    }
  }
}

const res = binarySearch([2, 4, 6, 75, 95, 200], 6);
console.log(res);
