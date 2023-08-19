// Question Link: https://leetcode.com/problems/sort-array-by-parity/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let start = 0
  let end = nums.length - 1
  while (start < end) {
    // Check the elem is even
    while (start < end && nums[start] % 2 === 0) {
      start++;
    }

    // Check the elem is odd
    while (start < end && nums[end] % 2 === 1) {
      end--;
    }

    // if yes: swap
    if (start < end) {
      nums[start] = nums[start] + nums[end]
      nums[end] = nums[start] - nums[end]
      nums[start] = nums[start] - nums[end]
    }


  }
  return nums
};