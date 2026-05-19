// Question Link: https://leetcode.com/problems/minimum-common-value
// 2540. Minimum Common Value

function getCommon(nums1: number[], nums2: number[]): number {
    const set = new Set(nums1);

    for(let i of nums2) {
        if(set.has(i)) return i
    }
    return -1
};
