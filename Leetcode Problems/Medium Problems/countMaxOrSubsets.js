// Question Link: https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/
// 2044. Count Number of Maximum Bitwise-OR Subsets

var countMaxOrSubsets = function(nums) {
    let maxOr = 0;
    for(let num of nums) {
        maxOr |= num
    }
    console.log(maxOr)

    function backtrack(idx, currOr) {
        if(idx == nums.length) {
            return currOr === maxOr ? 1 : 0;
        }

        if(currOr === maxOr) {
            return 1 << (nums.length - idx)
        }

        return backtrack(idx + 1, currOr | nums[idx]) + 
                backtrack(idx + 1, currOr)
    }

    return backtrack(0, 0)
};