// Question Link: https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  for (let i of s) {
    if (t.includes(i)) {
      t = t.replace(i, '')
    } else {
      return false
    }
  }
  if (t.length) return false
  return true;
};