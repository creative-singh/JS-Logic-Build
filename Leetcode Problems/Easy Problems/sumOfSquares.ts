// Question Link: https://leetcode.com/problems/sum-of-squares-of-special-elements
// 2778. Sum of Squares of Special Elements 

function sumOfSquares(nums: number[]): number {
    const n = nums.length;
    let res = 0;
    for(let i = 0; i < n; i++) {
        if(n % (i+1) === 0) {
            res += (nums[i] * nums[i])
        }
    }
    return res;
};
