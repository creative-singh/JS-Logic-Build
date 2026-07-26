// Question Link: https://leetcode.com/problems/maximum-product-of-three-numbers
// 628. Maximum Product of Three Numbers

function maximumProduct(nums: number[]): number {
    nums.sort((a, b) => a - b)
    const n = nums.length,
        option1 = nums[n - 1] * nums[n - 2] * nums[n - 3],
        option2 = nums[0] * nums[1] * nums[n - 1];

    return Math.max(option1, option2)
};
