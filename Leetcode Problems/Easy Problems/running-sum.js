// Question Link: https://leetcode.com/problems/running-sum-of-1d-array/description/

var runningSum = function(nums) {
    for(let i = 1; i < nums.length; i++) {
        nums[i] = nums[i] + nums[i-1]
    }   
    return nums 
};
