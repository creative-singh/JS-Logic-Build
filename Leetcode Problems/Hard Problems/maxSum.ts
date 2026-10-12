// Question Link: https://leetcode.com/problems/apply-operations-on-array-to-maximize-sum-of-squares/
// 2897. Apply Operations on Array to Maximize Sum of Squares

function maxSum(nums: number[], k: number): number {
    const b = new Array(30).fill(0), mod = 1000000007n;
    let ans = 0n;

    // Step 1: count the 1-bits in every bit position
    for (const x of nums)
        for (let i = 0; i < 30; i++)
            if (x & (1 << i)) b[i]++;

    // Step 2: build k numbers, each takes one 1-bit from every position that still has one
    while (k-- > 0) {
        let x = 0n;
        for (let i = 0; i < 30; i++) {
            if (b[i] > 0) {
                x |= 1n << BigInt(i);
                b[i]--;
            }
        }
        ans = (ans + x * x) % mod;
    }

    return Number(ans);
};
