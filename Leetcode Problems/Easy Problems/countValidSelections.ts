// Question Link: https://leetcode.com/problems/make-array-elements-equal-to-zero
// 3354. Make Array Elements Equal to Zero

var countValidSelections = function(nums) {
    const n = nums.length;
    const sum = nums.reduce((a, b) => a + b, 0);
    let left = 0, right = sum, res = 0;

    for(let i = 0; i < n; i++) {
        if(nums[i] === 0) {
            if(left - right >= 0 && left - right <= 1) 
                res++;

            if(right - left >= 0 && right - left <= 1) 
                res++;
        } else {
            left += nums[i];
            right -= nums[i];
        }
    }
    return res;
};
