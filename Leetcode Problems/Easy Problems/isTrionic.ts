// Question Link: https://leetcode.com/problems/trionic-array-i
// 3637. Trionic Array I

var isTrionic = function(nums) {
    let increasing = 0, decreasing = 0, mid = 0;
    for(let i = 0; i < nums.length - 1; i++) {
        if(nums[i] < nums[i + 1]) {
            if(decreasing) {
                mid = increasing
                increasing = 0
            }
            increasing++
        } else if(nums[i] > nums[i + 1]) {
            if(increasing && mid === 0) {
                decreasing++
            } else return false 
        } else {
            return false
        }
    }

    return increasing && decreasing && mid
};
