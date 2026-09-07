// Question Link: https://leetcode.com/problems/distinct-subsequences-ii
// 940. Distinct Subsequences II

function distinctSubseqII(s: string): number {
    const MOD = 1000000007, n = s.length;

    let dp = new Array(n + 1).fill(0), last = new Array(26).fill(-1);
    dp[0] = 1;

    for (let i = 0; i < n; i++) {
        let charCode = s.charCodeAt(i) - 97;
        dp[i + 1] = (dp[i] * 2) % MOD;

        if (last[charCode] !== -1) {
            let prevIndex = last[charCode];
            dp[i + 1] = (dp[i + 1] - dp[prevIndex] + MOD) % MOD;
        }

        last[charCode] = i;
    }
    return (dp[n] - 1 + MOD) % MOD;
};
