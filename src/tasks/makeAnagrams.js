function anagrams(str) {
  let arr = [];
  let res = [];

  for (let i = 0; i < str.length; i++) {
    arr[i] = str.charAt(i);
  }

  doAnagram(str.length);

  return res;

  function doAnagram(newSize) {
    if (newSize == 1) return;

    for (let i = 0; i < newSize; i++) {
      doAnagram(newSize - 1);
      if (newSize == 2) {
        res.push(arr.join(""));
        display();
      }
      rotate(newSize);
    }
  }

  function rotate(newSize) {
    let i;
    let position = str.length - newSize;
    let temp = arr[position];

    for (i = position + 1; i < str.length; i++) {
      arr[i - 1] = arr[i];
    }
    arr[i - 1] = temp;
  }

  function display() {
    console.log(arr);
  }
}

// console.log(anagrams("cat"));
