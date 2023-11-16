// Question Link: https://leetcode.com/problems/container-with-most-water/

var maxArea = function (height) {
  let st = 0
  let en = height.length - 1
  let maxCapacity = 0
  while (st < en) {
    let minHeight = 0
    let width = en - st

    if (height[st] > height[en]) {
      minHeight = height[en]
      en--
    } else {
      minHeight = height[st]
      st++
    }

    let capacity = minHeight * width
    if (capacity > maxCapacity) maxCapacity = capacity
  }
  return maxCapacity
};