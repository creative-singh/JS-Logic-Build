// Question Link: https://leetcode.com/problems/taking-maximum-energy-from-the-mystic-dungeon
// 3147. Taking Maximum Energy From the Mystic Dungeon

var maximumEnergy = function(energy, k) {
    const n = energy.length;
    let dp = Array(n).fill(0);
    let ans = -Infinity

    for(let i = n - 1; i >= 0; i--) {
        dp[i] = (dp[i + k] || 0) + energy[i]
        ans = Math.max(ans, dp[i])
    }
    return ans
};
