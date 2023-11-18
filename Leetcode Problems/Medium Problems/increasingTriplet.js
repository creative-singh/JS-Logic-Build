// Question Link: https://leetcode.com/problems/increasing-triplet-subsequence/

var increasingTriplet = function (nums) {
  let first = nums[0]
  let second = Infinity

  for (let i = 1; i < nums.length; i++) {
    if (first >= nums[i]) {
      first = nums[i]
    } else if (second >= nums[i]) {
      second = nums[i]
    } else {
      return true;
    }
  }
  return false;
};