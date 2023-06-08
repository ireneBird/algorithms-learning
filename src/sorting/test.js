function bubbleSort(arr) {
  for (let out = arr.length - 1; out > 1; out--) {
    for (let inn = 0; inn < out; inn++) {
      if (arr[inn] > arr[inn + 1]) {
        const temp = arr[inn];
        arr[inn] = arr[inn + 1];
        arr[inn + 1] = temp;
      }
    }
  }

  return arr;
}

// console.log(bubbleSort([3, 4, 2, 1, 0, 8, 5]));

function selectionSort(arr) {
  for (let out = 0; out < arr.length - 1; out++) {
    let min = out;
    for (let inner = out + 1; inner < arr.length; inner++) {
      if (arr[inner] < arr[min]) min = inner;
    }
    const temp = arr[out];
    arr[out] = arr[min];
    arr[min] = temp;
  }

  return arr;
}

// console.log(selectionSort([3, 4, 2, 1, 0, 8, 5]));

function insertionSort(arr) {
  for (let out = 1; out < 3; out++) {
    let temp = arr[out];
    let inner = out;

    while (inner > 0 && arr[inner - 1] > temp) {
      arr[inner] = arr[inner - 1];
      inner--;
    }

    arr[inner] = temp;
  }
  return arr;
}

// console.log(insertionSort([3, 4, 2, 1, 0, 8, 5]));

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  if (target < arr[start] || target > arr[end]) return -1;

  while (true) {
    let middle = Math.floor((start + end) / 2);

    if (target == arr[middle]) return middle;

    if (start > end) return -1;

    if (target < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
}

// console.log(binarySearch([0, 1, 2, 3, 4, 5, 8], 4));

function test(...args) {
  console.log(arguments);
  console.log(args);
}

console.log(test(2, "a", "44", { a: 20 }));
