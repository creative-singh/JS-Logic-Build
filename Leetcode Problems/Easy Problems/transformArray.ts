// Question Link: https://leetcode.com/problems/transform-array-by-parity
// 3467. Transform Array by Parity

var transformArray = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] % 2 === 0 ? 0 : 1;
    }a
    return nums.sort()
};
