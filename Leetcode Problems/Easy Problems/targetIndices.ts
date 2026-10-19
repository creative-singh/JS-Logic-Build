// Question Link: https://leetcode.com/problems/find-target-indices-after-sorting-array
// 2089. Find Target Indices After Sorting Array

function targetIndices(nums: number[], target: number): number[] {
    let tCount = 0, num = 0
    for (let i of nums) {
        if (i < target) {
            num++
        } else if (target == i) {
            tCount++
        }
    }
    let res = []
    while (tCount > 0) {
        res.push(num)
        num++; tCount--;
    }
    return res
};
