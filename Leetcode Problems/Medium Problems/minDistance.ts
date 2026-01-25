// Question Link: https://leetcode.com/problems/edit-distance
// 72. Edit Distance

var minDistance = function(word1, word2) {
    let n = word1.length, m = word2.length;
    let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0))

    for(let i = 0; i <= n; i++) {
        dp[i][0] = i
    }

    for(let j = 0; j <= m; j++) {
        dp[0][j] = j
    }

    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= m; j++) {
            if(word1[i - 1] === word2[j - 1]){
                dp[i][j] = 0 + dp[i - 1][j - 1]
            } else {
                dp[i][j] = 1 + Math.min(
                    // Insert
                    dp[i - 1][j],
                    Math.min(
                        dp[i][j - 1], dp[i - 1][j - 1]    
                        // Delete     // Replace
                    )
                )
            }
        }
    }
    return dp[n][m]
};
