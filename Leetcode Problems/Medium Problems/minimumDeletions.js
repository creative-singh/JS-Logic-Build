// Question Link: https://leetcode.com/problems/removing-minimum-and-maximum-from-array
// 2091. Removing Minimum and Maximum From Array

function minimumDeletions(nums: number[]): number {
    const n = nums.length;
    let min = 0, max = 0;

    for(let i = 1; i < n; i++) {
        if(nums[min] > nums[i])
            min = i
        if(nums[max] < nums[i])
            max = i
    }
    let right = Math.max(min, max), left = Math.min(min, max), res = right + 1;
    res = Math.min(res, n - left);
    res = Math.min(res, (left + 1) + (n - right));

    return res;
};
