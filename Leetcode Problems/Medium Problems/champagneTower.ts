// Question Link: https://leetcode.com/problems/champagne-tower
// 799. Champagne Tower

var champagneTower = function(poured, query_row, query_glass) {
    let dp = new Array(query_row + 1).fill(0);
    dp[0] = poured;

    for(let row = 1; row <= query_row; row++) {
        for(let i = row - 1; i >= 0; i--) {
            let extra = dp[i] - 1;
            if(extra > 0) {
                dp[i] = 0.5 * extra;
                dp[i + 1] += 0.5 * extra;
            } else {
                dp[i] = 0;
            }
        }
    } 
    return Math.min(1, dp[query_glass])
};
