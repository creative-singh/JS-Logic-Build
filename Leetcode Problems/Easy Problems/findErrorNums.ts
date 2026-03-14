// Question Link: https://leetcode.com/problems/set-mismatch
// 645. Set Mismatch

var findErrorNums = function(nums) {
    let unique = new Set(nums), total = 0, sumOfNums  = 0;
    for(let i = 0; i < nums.length; i++) {
        total += nums[i]
        sumOfNums += (i+1)
    }
    let sum = 0;
    for(let i of unique) {
        sum += i
    }
    return [total - sum, sumOfNums  - sum]
};
