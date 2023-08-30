// Binary Search Variation 
// Question Link: https://leetcode.com/problems/search-insert-position

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let leftIndex = 0;
  let rightIndex = nums.length - 1;
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (nums[middleIndex] === target) return middleIndex;
    if (nums[middleIndex] < target) {
      leftIndex = middleIndex + 1
    }
    else {
      rightIndex = middleIndex - 1
    }

  }
  return leftIndex
};