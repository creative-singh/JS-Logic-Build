// Question Link: https://leetcode.com/problems/left-and-right-sum-differences
// 2574. Left and Right Sum Differences

function leftRightDifference(nums: number[]): number[] {
    const len = nums.length;
    let left = [0], right = new Array(len);

    for(let i = 0; i < len - 1; i++) {
        left.push(left[i] + nums[i])
    }

    for(let i = len - 1; i >= 0; i--) {
        if(i === len-1) right[i] = 0
        else right[i] = right[i + 1] + nums[i + 1]
    }
    
    let res = [];
    for(let i = 0; i < len; i++) {
        res.push(Math.abs(left[i] - right[i]))
    }
    return res
};
