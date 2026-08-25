// Question Link: https://leetcode.com/problems/smallest-missing-multiple-of-k
// 3718. Smallest Missing Multiple of K

function missingMultiple(nums: number[], k: number): number {
    const set = new Set(nums)
    let i = k;
    while(true) {
        if(set.has(i)) {
            i = i + k
        } else return i
    }
};
