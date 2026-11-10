// Question Link: https://leetcode.com/problems/climbing-stairs-ii
// 3693. Climbing Stairs II

function climbStairs(n: number, costs: number[]): number {
    const dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;

    for (let j = 1; j <= n; j++) {
        for (let k = 1; k <= 3; k++) {
            const i = j - k;
            if (i >= 0) {
                const jump = (j - i) * (j - i);
                dp[j] = Math.min(dp[j], dp[i] + costs[j - 1] + jump);
            }
        }
    }
    return dp[n];
};
