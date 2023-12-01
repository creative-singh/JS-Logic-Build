// Question Link: https://leetcode.com/problems/trapping-rain-water

// 1st approach

var trap = function (height) {
  let len = height.length

  // Make left max array 
  let leftMax = [height[0]]
  for (let i = 1; i < len; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i])
  }

  // Make right max array
  let rightMax = [height[len - 1]]
  let rightMaxLen = rightMax.length
  for (let i = len - 1; i >= 0; i--) {
    rightMax.unshift(Math.max(rightMax[rightMaxLen - 1], height[i]))
  }

  // Now 1 by 1 calculate the sum by taking min from leftMax and rightMax
  let sum = 0
  for (let i = 0; i < len; i++) {
    sum += Math.min(leftMax[i], rightMax[i]) - height[i]
  }
  return sum
};


// 2nd Approach
var trap = function (height) {
  let len = height.length
  let st = 0; let end = len - 1
  let maxLeft = 0; let maxRight = 0;
  let sum = 0

  while (st <= end) {
    if (height[st] <= height[end]) {
      if (height[st] >= maxLeft)
        maxLeft = height[st]
      else
        sum += maxLeft - height[st]
      st++
    } else {
      if (height[end] >= maxRight)
        maxRight = height[end]
      else
        sum += maxRight - height[end]
      end--
    }
  }
  return sum
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
console.log(trap([4, 2, 0, 3, 2, 5]))