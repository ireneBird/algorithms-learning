function highestFrequency(array) {
  const map = {};
  let maxFrequency = 0;
  let maxFrequencyChar = array[0];

  for (let i = 0; i < array.length; i++) {
    const char = array[i];
    if (map[char]) {
      map[char]++;
    } else {
      map[char] = 1;
    }

    if (map[char] > maxFrequency) {
      maxFrequency = map[char];
      maxFrequencyChar = char;
    }
  }

  return maxFrequencyChar;
}

console.log(highestFrequency(["a", "b", "c", "c", "d", "e"])); // -> c
console.log(highestFrequency(["abc", "def", "abc", "def", "abc"])); // -> abc
console.log(highestFrequency(["abc", "def"])); // -> abc
console.log(
  highestFrequency([
    "abc",
    "abc",
    "def",
    "def",
    "def",
    "ghi",
    "ghi",
    "ghi",
    "ghi",
  ])
); // -> ghi
