// Question Link: https://leetcode.com/problems/removing-stars-from-a-string/

/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  let stack = []
  for (let i of s) {
    i === "*" ? stack.pop() : stack.push(i)
  }
  return stack.join("")
};