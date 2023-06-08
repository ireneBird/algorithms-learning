/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let insIndex = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] != nums[i]) {
      nums[insIndex++] = nums[i];
    }
  }

  return insIndex;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
//Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
