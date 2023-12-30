// Question Link: https://leetcode.com/problems/minimum-replacements-to-sort-the-array/

var minimumReplacement = function (nums) {
  let len = nums.length;
  let res = 0;
  for (let i = len - 2; i >= 0; i--) {
    if (nums[i] >= nums[i + 1]) {
      let parts = Math.floor(nums[i] / nums[i + 1]);
      if (nums[i] % nums[i + 1] != 0) parts += 1;

      res += parts - 1;
      nums[i] = Math.floor(nums[i] / parts);
    }
  }

  return res;
};
