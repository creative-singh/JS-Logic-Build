// Question Link: https://leetcode.com/problems/xor-after-range-multiplication-queries-i
// 3653. XOR After Range Multiplication Queries I

function xorAfterQueries(nums: number[], queries: number[][]): number {
    const mod = 1e9 + 7;
    for(let [a, b, c, d] of queries) {
        while(a <= b) {
            nums[a] = (nums[a] * d) % mod;
            a += c
        }
    }
    return nums.reduce((a, b) => a ^ b)
};
