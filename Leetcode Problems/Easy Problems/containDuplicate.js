// Question Link: https://leetcode.com/problems/contains-duplicate

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  return new Set(nums).size !== nums.length
};

var containsDuplicate = function (nums) {
  let set = new Set([...nums])
  return !(nums.length === set.size)
};