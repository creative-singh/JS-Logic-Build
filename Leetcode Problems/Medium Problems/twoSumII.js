// Question Link: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted

var twoSum = function (numbers, target) {
  let st = 0;
  let en = numbers.length - 1
  while (st < en) {
    let sum = numbers[st] + numbers[en]
    if (sum === target) {
      return [st + 1, en + 1]
    } else if (sum > target) {
      en--
    } else {
      st++
    }
  }
};