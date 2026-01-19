// Question Link: https://leetcode.com/problems/house-robber
// 198. House Robber

var rob = function(nums, dp = []) {
    let n = nums.length;
    let prev1 = nums[0];
    let prev2 = 0; let curr;

    for(let i =  1; i < n; i++) {
        let pick = nums[i]
        if(i > 1) pick += prev2

        let notPick = 0 + prev1

        curr = Math.max(pick, notPick)
        prev2 = prev1
        prev1 = curr
    }

    return prev1
};
