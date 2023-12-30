// Question Link: https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/

var getSumAbsoluteDifferences = function (nums) {
  const len = nums.length;
  const res = new Array(len).fill(0);
  let totalSum = 0;
  for (let i = 0; i < len; i++) {
    totalSum += nums[i];
  }
  let leftSum = 0;

  for (let i = 0; i < len; i++) {
    const rightSum = totalSum - leftSum - nums[i];
    res[i] =
      nums[i] * i -
      leftSum +
      (rightSum - nums[i] * (len - i - 1));
    leftSum += nums[i];
  }
  return res;
};
