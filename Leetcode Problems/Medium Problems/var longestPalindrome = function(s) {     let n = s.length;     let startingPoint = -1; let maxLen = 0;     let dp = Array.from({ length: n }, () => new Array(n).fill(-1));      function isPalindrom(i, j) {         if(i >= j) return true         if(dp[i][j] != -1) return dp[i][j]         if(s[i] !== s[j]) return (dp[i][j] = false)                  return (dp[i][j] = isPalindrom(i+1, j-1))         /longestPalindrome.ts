// Question Link: http://leetcode.com/problems/longest-palindromic-substring
// 5. Longest Palindromic Substring

var longestPalindrome = function(s) {
    let n = s.length;
    let startingPoint = -1; let maxLen = 0;
    let dp = Array.from({ length: n }, () => new Array(n).fill(-1));

    function isPalindrom(i, j) {
        if(i >= j) return true
        if(dp[i][j] != -1) return dp[i][j]
        if(s[i] !== s[j]) return (dp[i][j] = false)
        
        return (dp[i][j] = isPalindrom(i+1, j-1))
        // dp[i][j] = 0
    }

    if (isPalindrom(0, n - 1)) return s;

    for(let i = 0; i < n; i++) {
        for(let j = i; j < n; j++) {
            if(isPalindrom(i, j)) {
                if(maxLen < j - i + 1) {
                    startingPoint = i
                    maxLen = j - i + 1
                }
            }
        }
    }
    return s.slice(startingPoint, startingPoint + maxLen)
};v
