// Question Link: https://leetcode.com/problems/partition-array-according-to-given-pivot
// 2161. Partition Array According to Given Pivot

function pivotArray(nums: number[], pivot: number): number[] {
    let x = [], y = [], z = [];
    for(let i of nums) {
        if(i < pivot) {
            x.push(i);
        } else if (i > pivot) {
            z.push(i);
        } else {
            y.push(i);
        }
    }
    return [...x, ...y, ...z];
};
