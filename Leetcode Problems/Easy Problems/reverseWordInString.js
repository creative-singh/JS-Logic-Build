// Question Link : https://leetcode.com/problems/reverse-words-in-a-string-iii

/**
 * @param {string} s
 * @return {string}
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let sArr = s.split(" ")
  let res = []

  for (let i of sArr) {
    res.push(i.split("").reverse().join(""))
  }
  const resStr = res.join(" ")
  return resStr;
};