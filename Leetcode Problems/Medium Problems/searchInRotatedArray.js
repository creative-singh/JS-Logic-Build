// Question Link: https://leetcode.com/problems/search-in-rotated-sorted-array

var search = function (nums, target) {
  let st = 0
  let en = nums.length - 1
  while (st <= en) {
    let mid = Math.floor(st + ((en - st) / 2))
    if (nums[mid] === target) return mid;
    else if (nums[st] <= nums[mid]) {
      nums[st] <= target && nums[mid] > target
        ? en = mid - 1
        : st = mid + 1
    }
    else {
      nums[en] >= target && nums[mid] < target
        ? st = mid + 1
        : en = mid - 1
    }
  }
  return -1
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)) // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)) // -1
console.log(search([5, 1, 3], 5))         // 0 
console.log(search([5, 1, 3], 3))         // 2