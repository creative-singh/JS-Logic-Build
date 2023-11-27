// Question Link: https://leetcode.com/problems/find-peak-element

var findPeakElement = function (nums) {
  if (nums.length === 1) return 0
  let s = 0
  let e = nums.length - 1
  while (s <= e) {
    let mid = Math.floor((s + e) / 2)
    let rightElem = nums[mid + 1] ? nums[mid + 1] : -Infinity
    let leftElem = nums[mid - 1] ? nums[mid - 1] : -Infinity
    if (rightElem < nums[mid] && leftElem < nums[mid]) return mid
    nums[mid] < rightElem ? s = mid + 1 : e = mid - 1
  }
};


console.log(findPeakElement([0, 1, 0]))              // 1
console.log(findPeakElement([0, 2, 1, 0]))           // 1
console.log(findPeakElement([0, 10, 5, 2]))          // 1
console.log(findPeakElement([1, 2, 3, 1]))           // 2
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]))  // 5