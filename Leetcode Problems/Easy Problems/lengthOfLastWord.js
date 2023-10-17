// Question Link: https://leetcode.com/problems/length-of-last-word

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let str = s.split(" ")
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i].length) {
      return str[i].length
    }
  }
};