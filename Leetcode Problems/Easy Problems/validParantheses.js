// Question Link: https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let a = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      a.push(s[i]);
      continue;
    }
    if (s[i] === ")" && a[a.length - 1] === "(") {
      a.pop();
    } else if (s[i] === "}" && a[a.length - 1] === "{") {
      a.pop();
    } else if (s[i] === "]" && a[a.length - 1] === "[") {
      a.pop();
    } else {
      return false
    }
  }
  return !a.length;
};