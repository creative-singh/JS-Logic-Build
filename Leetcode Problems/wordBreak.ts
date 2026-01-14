// Question Link: https://leetcode.com/problems/word-break
// 139. Word Break

var wordBreak = function(s, wordDict) {
    let n = s.length
    let dp = new Array(n + 1).fill(false);
    dp[0] = true

    for(let i = 1; i <= n; i++) {
        for(let word of wordDict) {
            let start = i - word.length;
            
            if(start >= 0 && dp[start] && s.substring(start, i) === word) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[n]
};
