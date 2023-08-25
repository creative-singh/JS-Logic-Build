// Question Link: https://leetcode.com/problems/single-element-in-a-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) return nums[i];
  }
  return nums[nums.length - 1]
};

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8])) // 2