// Question Link: https://leetcode.com/problems/maximum-amount-of-money-robot-can-earn
// 3418. Maximum Amount of Money Robot Can Earn

var maximumAmount = function (coins) {
    const m = coins.length, n = coins[0].length;

    // dp[i][j][k] = max coins reaching (i,j) after using k neutralizations
    let dp = Array.from({ length: m }, () =>
        Array.from({ length: n }, () => Array(3).fill(-Infinity))
    );

    // we initialize start cell
    const start = coins[0][0];
    if (start >= 0) {
        dp[0][0][0] = start;     // no robber → no neutralization
    } else {
        dp[0][0][0] = start;     // take the loss
        dp[0][0][1] = 0;         // neutralize robber
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) continue;

            for (let k = 0; k < 3; k++) {
                let bestPrev = -Infinity;

                // from top
                if (i > 0)
                    bestPrev = Math.max(bestPrev, dp[i - 1][j][k]);

                // from left
                if (j > 0)
                    bestPrev = Math.max(bestPrev, dp[i][j - 1][k]);

                if (bestPrev === -Infinity) continue;

                const val = coins[i][j];

                // Option 1: do NOT neutralize
                dp[i][j][k] = Math.max(dp[i][j][k], bestPrev + val);

                // Option 2: neutralize (only if robber and k < 2)
                if (val < 0 && k < 2) {
                    dp[i][j][k + 1] = Math.max(dp[i][j][k + 1], bestPrev);
                }
            }
        }
    }

    // best among using 0,1,2 neutralizations at end
    return Math.max(...dp[m - 1][n - 1]);
};
