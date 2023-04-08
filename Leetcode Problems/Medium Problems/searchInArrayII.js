// Question Link: https://leetcode.com/problems/search-in-rotated-sorted-array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] === target) return i;
    if (nums?.[i + 1] === target) return i + 1
  }
  return -1;
};