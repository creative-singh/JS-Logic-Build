// Question Link: https://leetcode.com/problems/minimum-removals-to-balance-array
// 3634. Minimum Removals to Balance Array

var minRemoval = function(nums, k) {
    nums.sort((a, b) => a - b);
    let i = 0, maxLen = 0;

    for(let j = 0; j < nums.length; j++) {
        while(nums[j] > nums[i] * k) {
            i++;
        }
        maxLen = Math.max(maxLen, j - i + 1)
    }    
    return nums.length - maxLen
};
