// Question Link: https://leetcode.com/problems/fibonacci-number

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n < 1) return 0
  let fib = [1, 1]
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2])
  }
  return fib[n - 1]
};