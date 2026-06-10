// Question Link: https://leetcode.com/problems/maximum-total-subarray-value-i
// 3689. Maximum Total Subarray Value I

function maxTotalValue(nums: number[], k: number): number {
    return (Math.max(...nums) - Math.min(...nums)) * k;
};
