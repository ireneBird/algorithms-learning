var merge = function (nums1, m, nums2, n) {
  for (let i = m, j = 0; j < n; i++, j++) {
    nums1[i] = nums2[j];
  }

  nums1.sort((a, b) => a - b);
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
///[1,2,2,3,5,6]

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let k = nums.reduce((acc, num) => {
    if (num != val) acc++;
    return acc;
  }, 0);

  // for (let i = 0, j = 0; i < nums.length; i++) {
  //   if (nums[i] != val) {
  //     nums[j] = nums[i];
  //     j++;
  //   }
  // }

  let i = 0;
  n = nums.length;

  while (i < n) {
    if (nums[i] == val) {
      nums[i] = nums[n - 1];
      n--;
    } else {
      i++;
    }
  }

  return k;
};

// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
//nums = [0,1,4,0,3,_,_,_]

var wordPattern = function (pattern, s) {
  const arr = s.split(" ");
  if (arr.length !== pattern.length) return false;

  const mapPattern = {};
  const mapString = {};

  for (let i = 0; i < pattern.length; i++) {
    const key = pattern[i];
    const word = arr[i];

    if (mapPattern.hasOwnProperty(key) || mapString.hasOwnProperty(word)) {
      if (mapPattern[key] !== word) return false;
      if (mapString[word] !== key) return false;
    } else {
      mapPattern[key] = word;
      mapString[word] = key;
    }
  }

  return true;
};

console.log(wordPattern("abba", "dog constructor constructor dog")); //true

// pattern = "abba", s = "dog cat cat dog"
// console.log(wordPattern("abba", "dog cat cat dog")); //true
// console.log(wordPattern("abba", "dog cat cat fish")); //false

// dog constructor constructor dog

var isSubsequence = function (s, t) {
  if (s.length > t.length) return false;

  let subsequence = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[subsequence] == t[i]) {
      subsequence++;
    }
  }

  return subsequence == s.length;
};

// console.log(isSubsequence("abc", "ahbgdc")); //true

// console.log(isSubsequence("axc", "ahbgdc")); //false

// console.log(isSubsequence("", "ahbgdc")); //true

// console.log(isSubsequence("c", "b")); //false

// console.log(isSubsequence("bb", "ahbgdc")); //false
