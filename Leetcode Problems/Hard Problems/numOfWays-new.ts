// Question Link: https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst
// 1569. Number of Ways to Reorder Array to Get Same BST

var numOfWays = function(nums) {
    const MOD = 1000000007n, n = nums.length;
    const C = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0n));

    for (let i = 0; i <= n; i++) {
        C[i][0] = 1n;
        for (let j = 1; j <= i; j++)
            C[i][j] = (C[i - 1][j - 1] + C[i - 1][j]) % MOD;
    }

    const ways = (a) => {
        const m = a.length;

        if (m <= 2) return 1n;

        const left = [], right = [];

        for (let i = 1; i < m; i++) {
            if (a[i] < a[0]) left.push(a[i]);
            else right.push(a[i]);
        }
        return C[m - 1][left.length] * ways(left) % MOD * ways(right) % MOD;
    };

    return Number((ways(nums) - 1n + MOD) % MOD);
};
