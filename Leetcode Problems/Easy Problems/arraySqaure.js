// Question Link: https://leetcode.com/problems/squares-of-a-sorted-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  if (nums.length < 2) return [nums[0] * nums[0]]
  let res = []
  let st = 0
  let en = nums.length - 1
  let ptr = en
  while (st <= en) {
    if (Math.abs(nums[st]) > Math.abs(nums[en])) {
      res[ptr] = nums[st] * nums[st]
      st++
    } else {
      res[ptr] = nums[en] * nums[en]
      en--
    }
    ptr--
  }
  return res
}