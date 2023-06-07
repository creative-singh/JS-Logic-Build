/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  // return nums.reduce(fn, init)
  var result = init;
  for (let i = 0; i < nums.length; i++) {
    result = fn(result, nums[i])
  }
  return result
};