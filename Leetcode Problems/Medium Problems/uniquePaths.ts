// Question Link: https://leetcode.com/problems/unique-paths
// 62. Unique Paths

// With recussion
var uniquePaths = function(m, n) {
    let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(-1))

    function helper(r, c) {
        if(r === m - 1 && c === n - 1) {
            return 1;
        }
        
        if(r < 0 || r >= m || c < 0 || c >= n) {
            return 0;
        }

        if(dp[r][c] !== -1) return dp[r][c]

        let right = helper(r, c + 1)
        let down = helper(r + 1, c)

        return dp[r][c] = right + down
    }

    return helper(0, 0)
};


// With loop

var uniquePaths = function(m, n) {
    const dp = new Array(n).fill(1);
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[j] += dp[j - 1];
        }
    }
    return dp[n - 1];
};
