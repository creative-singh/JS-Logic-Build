// Question Link: https://leetcode.com/problems/longest-common-subsequence
// 1143. Longest Common Subsequence

var longestCommonSubsequence = function(text1, text2) {
    let m = text1.length, n = text2.length
    let dp = Array.from({ length: m }, () => Array(n).fill(-1))

    function helper(i, j) {
        if(i >= m || j >= n)
            return 0

        if(dp[i][j] !== -1)
            return dp[i][j]
        
        if(text1[i] === text2[j]) {
            return dp[i][j] = 1 + helper(i + 1, j + 1)
        } else {
            return dp[i][j] = Math.max(helper(i, j+ 1), helper(i + 1, j))
        }
    }

    return helper(0, 0)    
};
