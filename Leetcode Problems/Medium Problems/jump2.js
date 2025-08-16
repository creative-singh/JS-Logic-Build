// Question Link: https://leetcode.com/problems/jump-game-ii
// 45. Jump Game II

var jump = function(nums) {
    let jumps = 0, l = 0, r = 0, n = nums.length;
    while(r < n - 1) {
        let farthest = 0;
        for(let i = l; i <= r; i++) {
            farthest = Math.max(farthest, i + nums[i]);
        }
        l = r + 1;
        r = farthest;
        jumps++;
    }
    return jumps
};
