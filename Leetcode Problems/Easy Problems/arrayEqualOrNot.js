// Question Link: https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays

var canBeEqual = function (target, arr) {
  if (target.length !== arr.length) return false
  for (let i of target) {
    if (arr.includes(i)) {
      let ind = arr.indexOf(i)
      arr.splice(ind, 1)
    } else {
      return false
    }
  }
  return true
};