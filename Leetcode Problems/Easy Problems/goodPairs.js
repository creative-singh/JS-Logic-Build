// Question Link: https://leetcode.com/problems/number-of-good-pairs/

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  // if nums holds unique value return 0;
  let numsSet = new Set(nums)
  if (Array.from(numsSet).length === nums) return 0;

  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) result += 1;
    }
  }
  return result
};