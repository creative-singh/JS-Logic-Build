// Question Link: https://leetcode.com/problems/single-element-in-a-sorted-array

var singleNonDuplicate = function (nums) {
  let s = 0
  let e = nums.length - 1

  if (nums.length === 1) return nums[0]
  if (nums[s] !== nums[s + 1]) return nums[s]
  if (nums[e] !== nums[e - 1]) return nums[e]

  while (s <= e) {
    let mid = Math.floor((s + e) / 2)
    if (nums[mid] !== nums[mid + 1] && nums[mid] !== nums[mid - 1])
      return nums[mid]


    if (mid % 2 === 0) {
      if (nums[mid + 1] === nums[mid]) {
        s = mid + 1
      } else {
        e = mid - 1
      }
    } else {
      if (nums[mid - 1] === nums[mid]) {
        s = mid + 1
      } else {
        e = mid - 1
      }
    }
  }
};
