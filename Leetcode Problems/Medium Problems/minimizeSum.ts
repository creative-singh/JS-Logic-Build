// Quesstion Link: https://leetcode.com/problems/minimum-score-by-changing-two-elements
// 2567. Minimum Score by Changing Two Elements

function minimizeSum(nums: number[]): number {
    const n = nums.length;
    nums.sort((a, b) => a - b);
    
    const opt1 = nums[n - 1] - nums[2],
        opt2 = nums[n - 2] - nums[1],
        opt3 = nums[n - 3] - nums[0];
    
    return Math.min(opt1, opt2, opt3);
};
