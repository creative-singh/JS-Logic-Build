// Question Link: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array

var findMin = function (nums) {
  let len = nums.length;
  if (len === 1 || nums[0] < nums[len - 1]) return nums[0];
  let st = 0;
  let en = nums.length - 1;
  while (st <= en) {
    let mid = Math.floor((st + en) / 2);
    if (nums[mid] > nums[mid + 1]) return nums[mid + 1];
    nums[st] <= nums[mid] ? (st = mid + 1) : (en = mid - 1);
  }
};

console.log(findMin([3, 4, 5, 1, 2]));
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
console.log(findMin([11, 13, 15, 17]));
