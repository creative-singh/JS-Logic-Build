// Question Link: https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid
// 1411. Number of Ways to Paint N × 3 Grid

var numOfWays = function(n) {
    const MOD = 1000000007;
    let x = 6, y = 6;
    
    for (let i = 2; i <= n; i++) {
        const new_x = (3 * x + 2 * y) % MOD;
        const new_y = (2 * x + 2 * y) % MOD;
        x = new_x;
        y = new_y;
    }
    
    return (x + y) % MOD;
};
