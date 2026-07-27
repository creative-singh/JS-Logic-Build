// Question Link: https://leetcode.com/problems/maximum-product-difference-between-two-pairs
// 1464. Maximum Product of Two Elements in an Array

var maxProductDifference = function (nums) {
  nums.sort((a, b) => a - b);
  return (
    nums[nums.length - 1] * nums[nums.length - 2] -
    nums[0] * nums[1]
  );
};

// TS
// function maxProduct(nums: number[]): number {
//     let max = nums[0], sMax = -1
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] > max) {
//             sMax = max
//             max = nums[i]
//         } else if (sMax < nums[i]) {
//             sMax = nums[i]
//         }
//     }
//     return (max - 1) * (sMax - 1)
// };
