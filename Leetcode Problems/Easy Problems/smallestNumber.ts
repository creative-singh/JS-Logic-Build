// Question Link: https://leetcode.com/problems/smallest-number-with-all-set-bits
// 3370. Smallest Number With All Set Bits

function smallestNumber(n: number): number {
    let x = 1;
    while (x < n) {
        x = x * 2 + 1;
    }
    return x;
};
