// Question Link: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array

var searchRange = function (nums, target) {
  if (!nums.length) return [-1, -1];
  let firstOcc = findTarget(nums, target);
  let lastOcc = findTarget(nums, target, false);
  return [firstOcc, lastOcc];
};

const findTarget = (arr, t, first = true) => {
  let st = 0;
  let en = arr.length - 1;
  let res = -1;
  while (st <= en) {
    let mid = Math.floor(st + (en - st) / 2);
    if (arr[mid] === t) {
      res = mid;
      first ? (en = mid - 1) : (st = mid + 1);
    } else if (arr[mid] < t) st = mid + 1;
    else en = mid - 1;
  }
  return res;
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([(5, 7, 7, 8, 8, 10)], 6));
console.log(searchRange([3, 3, 3], 3));
console.log(searchRange([], 0));
