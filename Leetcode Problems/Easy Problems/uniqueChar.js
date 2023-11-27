// Question Link: https://leetcode.com/problems/first-unique-character-in-a-string/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  for (let i of s) {
    if (s.lastIndexOf(i) === s.indexOf(i))
      return s.indexOf(i)
  }
  return -1;
};