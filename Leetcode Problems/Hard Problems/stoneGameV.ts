// Question Link: https://leetcode.com/problems/stone-game-v
// 1563. Stone Game V

function stoneGameV(stoneValue: number[]): number {
    const n = stoneValue.length;
    let dp = Array.from({ length: n }, () => Array(n).fill(-1));

    function game(i, j, total) {
        if (i >= j)
            return 0;
        if (dp[i][j] !== -1)
            return dp[i][j];

        let ans = 0, sumTillK = 0;

        for (let k = i; k < j; k++) {
            sumTillK += stoneValue[k];

            const sumAfterK = total - sumTillK;

            if (sumTillK > sumAfterK) {
                ans = Math.max(ans, sumAfterK + game(k + 1, j, sumAfterK));
            } else if (sumTillK < sumAfterK) {
                ans = Math.max(ans, sumTillK + game(i, k, sumTillK));
            } else {
                ans = Math.max(ans, sumTillK +
                    Math.max(game(k + 1, j, sumAfterK), game(i, k, sumTillK))
                );
            }
        }
        return dp[i][j] = ans;
    }

    const totalSum = stoneValue.reduce((a, b) => a + b, 0);
    return game(0, n - 1, totalSum);
};
