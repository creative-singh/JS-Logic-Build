// Question Link: https://leetcode.com/problems/search-in-rotated-sorted-array-ii/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  let i = 0;
  let j = nums.length - 1;
  while (i <= j) {
    if (nums[i] === target || nums[j] === target) {
      return true;
    }
    i++; j--;
  }
  return false;
};