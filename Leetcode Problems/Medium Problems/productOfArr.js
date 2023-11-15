// Question Link: https://leetcode.com/problems/product-of-array-except-self

var productExceptSelf = function (nums) {
  let len = nums.length
  let right = []
  let product = 1
  for (let i = len - 1; i >= 0; i--) {
    product = nums[i] * product
    right[i] = product
  }
  let left = 1
  let ans = []
  for (let i = 0; i < len - 1; i++) {
    ans[i] = left * right[i + 1]
    left = nums[i] * left
  }
  ans[len - 1] = left
  return ans
};