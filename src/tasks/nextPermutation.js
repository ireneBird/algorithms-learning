// Time complexity : O(n)O(n)O(n). In worst case, only two scans of the whole array are needed.

// Space complexity : O(1)O(1)O(1). No extra space is used. In place replacements are done.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let i = nums.length - 2;
  while (i >= 0 && nums[i + 1] <= nums[i]) {
    i--;
  }

  if (i >= 0) {
    let j = nums.length - 1;
    while (nums[j] <= nums[i]) j--;

    swap(nums, i, j);
  }

  reverse(nums, i + 1);
};

function reverse(nums, start) {
  let i = start,
    j = nums.length - 1;

  while (i < j) {
    swap(nums, i, j);
    i++;
    j--;
  }
}

function swap(nums, one, two) {
  const temp = nums[one];
  nums[one] = nums[two];
  nums[two] = temp;
}
