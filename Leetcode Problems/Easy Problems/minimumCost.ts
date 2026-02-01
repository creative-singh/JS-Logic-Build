// Question Link: https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i
// 3010. Divide an Array Into Subarrays With Minimum Cost I

var minimumCost = function(nums) {
    if(nums.length === 3) {
        return nums[0] + nums[1] + nums[2];
    };

    let min = nums[1], secondMin = 51;

    for(let i = 2; i < nums.length; i++) {
        if(min > nums[i]) {
            secondMin = min
            min = nums[i]
        } else if(secondMin > nums[i]) {
            secondMin = nums[i]
        }
    }
    return nums[0] + min + secondMin
};
