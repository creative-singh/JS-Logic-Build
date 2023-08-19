// Question Link: https://leetcode.com/problems/move-zeroes

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.length === 1) return nums;
  let endPoint = nums.length - 1
  let startPoint = 0;
  while (startPoint < endPoint) {
    if (nums[startPoint] === 0) {
      nums.splice(startPoint, 1)
      nums.push(0)
      endPoint -= 1;
    } else {
      startPoint += 1
    }
  }
  return nums
};