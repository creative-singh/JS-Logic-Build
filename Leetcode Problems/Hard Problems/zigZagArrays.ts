// Question Link: https://leetcode.com/problems/number-of-zigzag-arrays-i
// 3699. Number of ZigZag Arrays I

function zigZagArrays(n: number, l: number, r: number): number {
    const MOD = 1000000007, m = r - l + 1;
    let dp = Array(m).fill(1);

    for (let i = 2; i <= n; i++) {
        const pref = Array(m);
        pref[0] = dp[0];

        for (let j = 1; j < m; j++) {
            pref[j] = (pref[j - 1] + dp[j]) % MOD;
        }

        let newDp = Array(m).fill(0);
        if (i % 2 === 0) {
            for (let j = 1; j < m; j++) {
                newDp[j] = pref[j - 1];
            }
        } else {
            const total = pref[m - 1];
            for (let j = 0; j < m - 1; j++) {
                newDp[j] = (total - pref[j] + MOD) % MOD;
            }
        }
        dp = newDp;
    }
    let ans = 0;
    for (const x of dp) {
        ans = (ans + x) % MOD;
    }
    return ans * 2 % MOD;
};
