// Question Link: https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/

var maxProduct = function (nums) {
  let max = nums[0];
  let sMax = -1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      sMax = max;
      max = nums[i];
    } else if (sMax < nums[i]) {
      sMax = nums[i];
    }
  }
  return (max - 1) * (sMax - 1);
};
