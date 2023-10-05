// Question Link: https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) return s.length;
  let set = new Set();
  let start = 0;
  let max = 0
  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[start])
      start++;
    }
    set.add(s[i])
    max = Math.max(max, i - start + 1)
  }
  return max
};
