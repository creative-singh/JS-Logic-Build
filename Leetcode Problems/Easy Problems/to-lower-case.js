// Question Link : https://leetcode.com/problems/to-lower-case/

/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  // return s.toLowerCase()
  const big = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const small = "abcdefghijklmnopqrstuvwxyz";
  let res = ""
  for (let i of s) {
    if (big.indexOf(i) >= 0) {
      res += small[big.indexOf(i)]
    } else {
      res += i
    }
  }
  return res
};