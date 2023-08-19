// Question Link: https://leetcode.com/problems/final-value-of-variable-after-performing-operations

/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  var X = 0;
  for (let i of operations) {
    '-' === i[1] ? --X : ++X;
  }
  return X;
};