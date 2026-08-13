// Question Link: https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency
// 2958. Length of Longest Subarray With at Most K Frequency

function maxSubarrayLength(nums: number[], k: number): number {
    const n = nums.length;
    let res = 1, left = 0, freq = new Map();

    for (let right = 0; right < n; right++) {
        const c = nums[right];
        freq.set(c, (freq.get(c) || 0) + 1);
        
        while (freq.get(c) > k) {
            const d = nums[left];
            freq.set(d, freq.get(d) - 1);
            left++;
        }
        res = Math.max(res, right - left + 1);
    }
    return res;
};
