// Question Link: https://leetcode.com/problems/minimize-maximum-pair-sum-in-array

var minPairSum = function (nums) {
  let sNums = nums.sort((a, b) => a - b)
  let res = 0
  let st = 0
  let en = nums.length - 1;
  while (st < en) {
    let temp = sNums[st] + sNums[en]
    if (temp > res) res = temp;
    st++
    en--
  }
  return res
};
