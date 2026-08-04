// Question Link: https://leetcode.com/problems/find-missing-elements
// 3731. Find Missing Elements

function findMissingElements(nums: number[]): number[] {
    let min = 101, max = 0, set = new Set();

    for(let i = 0; i < nums.length; i++) {
        min = Math.min(nums[i], min); 
        max = Math.max(nums[i], max);
        set.add(nums[i])
    }

    let res = [];
    for(let i = min+1; i < max; i++) {
        if(!set.has(i)) {
            res.push(i)
        }
    }
    return res
};
