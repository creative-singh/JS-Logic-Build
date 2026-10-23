// Question Link: https://leetcode.com/problems/maximum-k-to-sort-a-permutation
// 3644. Maximum K to Sort a Permutation

function sortPermutation(nums: number[]): number {
    let res = -1;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== i) res &= nums[i]
    }
    return res === -1 ? 0 : res;
};
