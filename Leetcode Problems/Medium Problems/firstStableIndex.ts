// Question Link: https://leetcode.com/problems/smallest-stable-index-ii
// 3904. Smallest Stable Index II

function firstStableIndex(nums: number[], k: number): number {
    const n = nums.length, temp = new Array(n);
    temp[n-1] = nums[n-1] ;

    for (let i = n-2; i >= 0; i--)
        temp[i] = Math.min(nums[i], temp[i+1]);

    let max = -Infinity;

    for (let i = 0; i < n; i++) {
        max = Math.max(max, nums[i]);
        if (max - temp[i] <= k) return i;
    }
    return -1;
};
