// Question Link: https://leetcode.com/problems/longest-subsequence-with-non-zero-bitwise-xor
// 3702. Longest Subsequence With Non-Zero Bitwise XOR

function longestSubsequence(nums: number[]): number {
    let xorValue = 0, hasNonZero = false;
    const n = nums.length;

    for (const x of nums) {
        xorValue ^= x;

        if (x !== 0) hasNonZero = true;
    }

    if (xorValue !== 0) return n;

    if (hasNonZero) return n - 1;

    return 0;
};
