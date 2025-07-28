// Question Link: https://leetcode.com/problems/count-hills-and-valleys-in-an-array
// 2210. Count Hills and Valleys in an Array

var countHillValley = function(nums) {
    let res = 0;
    let left = 0;
    
    for(let i = 1; i < nums.length - 1; i++) {
        if(nums[i] !== nums[i + 1]) {
            if(
                (nums[i] < nums[left] && nums[i] < nums[i + 1]) || 
                (nums[i] > nums[left] && nums[i] > nums[i + 1])
            ) {
                res++;
            }
            left = i;
        }
    }
    return res;
};
