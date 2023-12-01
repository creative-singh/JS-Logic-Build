// Question Link: https://leetcode.com/problems/maximum-subarray

var maxSubArray = function (nums) {
  let currSum = nums[0]
  let maxSum = nums[0]
  for (let i = 1; i < nums.length; i++) {
    let tempSum = currSum + nums[i]
    if (nums[i] > tempSum) {
      currSum = nums[i]
    } else {
      currSum = tempSum
    }

    if (maxSum < currSum) {
      maxSum = currSum
    }
  }
  return maxSum
};