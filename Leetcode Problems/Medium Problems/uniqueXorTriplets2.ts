// Question Link: https://leetcode.com/problems/number-of-unique-xor-triplets-ii
// 3514. Number of Unique XOR Triplets II

function uniqueXorTriplets(nums: number[]): number {
    const n = nums.length, MAX = 2048;

    if (n === 1) return 1;

    const pair = new Uint8Array(MAX), seen = new Uint8Array(MAX);

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            pair[nums[i] ^ nums[j]] = 1;
        }
    }

    for (let x = 0; x < MAX; x++) {
        if (!pair[x]) continue;

        for (let i = 0; i < n; i++) {
            seen[x ^ nums[i]] = 1;
        }
    }

    let res = 0;
    for (let i = 0; i < MAX; i++) {
        res += seen[i];
    }
    return res;
};
