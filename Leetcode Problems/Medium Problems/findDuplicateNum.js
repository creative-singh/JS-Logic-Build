// Question Link: https://leetcode.com/problems/find-the-duplicate-number

var findDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    // Mimic Math.abs
    let val = nums[i] < 0 ? -nums[i] : nums[i];
    // if index value positive, make negative or return
    if (nums[val] > 0) {
      nums[val] = -nums[val];
    } else {
      return val;
    }
  }
};

console.log(findDuplicate([1, 3, 4, 2, 2]));
console.log(findDuplicate([3, 1, 3, 4, 2]));
