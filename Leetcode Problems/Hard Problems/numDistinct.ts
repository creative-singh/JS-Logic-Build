// Question Link: https://leetcode.com/problems/distinct-subsequences/
// 115. Distinct Subsequences

function numDistinct(s: string, t: string): number {
    const sLen = s.length, tLen = t.length;
    let dp = Array(tLen + 1).fill(0)
    dp[0] = 1

    for(let i = 0; i < sLen; i++) {
        for(let j = tLen - 1; j >= 0; j--) {
            if(s[i] === t[j]) {
                dp[j + 1] = dp[j + 1] + dp[j]
            }
        }
    }
    return dp[tLen]
};
