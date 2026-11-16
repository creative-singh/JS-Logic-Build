// Question Link: https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum
// 1524. Number of Sub-arrays With Odd Sum

function numOfSubarrays(arr: number[]): number {
    const mod = 1e9 + 7, n = arr.length;
    let odd = 0, sum = 0;
    
    for(let i of arr) {
        odd += (sum += i) & 1;
    }

    return odd * (n + 1 - odd) % mod;
};
