// Question Link: https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum
// 2996. Smallest Missing Integer Greater Than Sequential Prefix Sum

function missingInteger(nums: number[]): number {
    let sum = nums[0], i = 1;
    while (i < nums.length && nums[i] === nums[i - 1] + 1) {
        sum += nums[i];
        i++;
    }

    let candidate = sum;
    while (nums.includes(candidate)) {
        candidate++;
    }
    return candidate;
};
