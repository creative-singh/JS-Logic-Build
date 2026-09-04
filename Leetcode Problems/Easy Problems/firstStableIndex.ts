// Question Link: https://leetcode.com/problems/smallest-stable-index-i
// 3903. Smallest Stable Index I

function firstStableIndex(nums: number[], k: number): number {
    const n = nums.length, { min, max } = Math;
    let  suf = new Array(n).fill(nums[n - 1]);

    for (let i = n - 2; i >= 0; i--) {
        suf[i] = min(suf[i + 1], nums[i]);
    }

    for (let i = 0, pre = nums[i]; i < n; i++) {
        pre = max(pre, nums[i]);
        if (pre - suf[i] <= k) return i;
    }
    return -1;
};
