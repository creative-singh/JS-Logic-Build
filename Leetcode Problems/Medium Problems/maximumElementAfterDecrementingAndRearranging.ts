// Question Link: https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/
// 1846. Maximum Element After Decreasing and Rearranging

function maximumElementAfterDecrementingAndRearranging(arr: number[]): number {
    const n = arr.length;
    const freq = new Uint32Array(n + 1);

    for (const i of arr)
        freq[Math.min(i, n)]++;

    let res = 1;
    for (let i = 2; i <= n; i++)
        res = Math.min(res + freq[i], i);

    return res;
};
