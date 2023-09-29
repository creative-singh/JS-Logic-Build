// Question Link: https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/

/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function (words, s) {
  if (words.length !== s.length) return false
  for (let i in words) {
    if (!(words[i].charAt(0) === s[i]))
      return false
  }

  return true;
};