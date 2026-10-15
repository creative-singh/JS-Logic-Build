// Question Link: https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i
// 2913. Subarrays Distinct Element Sum of Squares I

function sumCounts(nums: number[]): number {
    const n = nums.length;
    let res = 0;

    for(let i = 0; i < n; i++) {
        let set = new Set();
        for(let j = i; j < n; j++) {
            set.add(nums[j]);
            res += set.size * set.size;
        }
    }

    return res;
};
