// Question Link : https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function (nums, target) {
  const numLength = nums.length;
  let count = 0;
  for (let i = 0; i < numLength; i++) {
    for (let j = i + 1; j < numLength; j++) {
      if (nums[i] + nums[j] < target) count++
    }
  }
  return count;
};