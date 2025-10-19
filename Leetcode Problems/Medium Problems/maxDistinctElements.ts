// Question Link: https://leetcode.com/problems/maximum-number-of-distinct-elements-after-operations
// 3397. Maximum Number of Distinct Elements After Operations

function maxDistinctElements(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);
    let res = 0; let prev = -Infinity;

    for(let i of nums) {
        if(prev < i - k) {
            prev = i - k;
            res++;
        } else if(prev < i + k) {
            prev = prev + 1;
            res++;
        }
    }
    return res;
};
