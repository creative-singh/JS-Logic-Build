// Question Link: https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero
// 1304. Find N Unique Integers Sum up to Zero  

function sumZero(n: number): number[] {
    const res = new Array(n);
    res[0] = n * (1 - n) / 2;
    for (let i = 1; i < n; ++i)
        res[i] = i;
    return res;  
};
