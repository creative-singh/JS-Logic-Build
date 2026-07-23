// Question Link: https://leetcode.com/problems/number-of-unique-xor-triplets-i
// 3513. Number of Unique XOR Triplets I

function uniqueXorTriplets(nums: number[]): number {
    const n = nums.length;

    if (n < 3)
        return n;

    let bits = 0, x = n;

    while (x) {
        bits++;
        x >>= 1;
    }
    return 1 << bits;
};
