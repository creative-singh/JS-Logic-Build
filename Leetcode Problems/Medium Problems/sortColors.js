// Question Link: https://leetcode.com/problems/sort-colors/

var sortColors = function (nums) {
  let l = 0
  let m = 0
  let r = nums.length - 1
  while (m <= r) {
    if (nums[m] === 0) {
      [nums[l], nums[m]] = [nums[m], nums[l]]
      l++
      m++
    } else if (nums[m] === 1) {
      m++
    } else {
      [nums[r], nums[m]] = [nums[m], nums[r]]
      r--
    }
  }
};