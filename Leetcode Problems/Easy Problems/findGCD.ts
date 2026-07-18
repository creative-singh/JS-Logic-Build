// Question Link: https://leetcode.com/problems/find-greatest-common-divisor-of-array
// 1979. Find Greatest Common Divisor of Array

function findGCD(nums: number[]): number {
    let min = Math.min(...nums)
    let max = Math.max(...nums)
    return gcd(min, max)
};

function gcd(a, b) {
    if (a === 0) return b;
    if (b === 0) return a;
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
