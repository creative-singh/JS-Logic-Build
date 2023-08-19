// Question Link: https://leetcode.com/problems/find-numbers-with-even-number-of-digits

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let res = 0;
  for (let i of nums) {
    let str = String(i)
    if (str.length % 2 === 0) {
      res++;
    }
  }
  return res;
};