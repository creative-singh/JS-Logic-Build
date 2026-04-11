// https://leetcode.com/problems/minimum-distance-between-three-equal-elements-ii
// 3741. Minimum Distance Between Three Equal Elements II

function minimumDistance(nums: number[]): number {
    const n = nums.length;
    let map = new Map();

    if(n <= 2) return -1;
    let ans = Infinity;

    for(let i = 0; i < n; i++) {
        if(!map.has(nums[i])) {
            map.set(nums[i], [])
        }
        map.get(nums[i]).push(i)
    }

    for(let indices of map.values()) {
        if(indices.length < 3) continue;

        for(let i = 0; i + 2 < indices.length; i++) {
            let dist = 2 * (indices[i + 2] - indices[i]);
            if(dist < ans) {
                ans = dist;
            }
        }
    }
    return (ans === Infinity) ? -1 : ans;
};
