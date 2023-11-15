// Question Link: https://leetcode.com/problems/bulb-switcher

var bulbSwitch = function (n) {
  let count = 0
  for (let i = 1; i * i <= n; i++) {
    count++
  }
  return count

  // return Math.floor(Math.sqrt(n))
};