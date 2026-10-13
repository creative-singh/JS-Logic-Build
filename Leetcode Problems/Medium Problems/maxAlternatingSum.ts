// Question Link: https://leetcode.com/problems/maximum-alternating-sum-of-squares
// 3727. Maximum Alternating Sum of Squares

function maxAlternatingSum(nums: number[]): number {
    // Step 1: square every number
    const sqr = nums.map(x => x * x), n = nums.length;

    // Step 2: sort numerically — smallest on the left, biggest on the right
    sqr.sort((a, b) => a - b);

    let res = 0;
    const k = Math.floor(n / 2);   // number of minus places

    // Step 3: subtract the k smallest squares
    for (let i = 0; i < k; i++)
        res -= sqr[i];

    // Step 4: add all the bigger squares
    for (let i = k; i < n; i++)
        res += sqr[i];

    return res;
};
