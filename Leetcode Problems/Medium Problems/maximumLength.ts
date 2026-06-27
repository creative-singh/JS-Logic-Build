// Question Link: https://leetcode.com/problems/find-the-maximum-number-of-elements-in-subset
// 3020. Find the Maximum Number of Elements in Subset

function maximumLength(nums: number[]): number {
    let count = new Map();
    for (const i of nums) {
        count.set(i, (count.get(i) || 0) + 1);
    }

    let res = 0;
    for (const [start, freq] of count) {
        let key = start;
        let total = 0;
        if (key === 1) {
            total = freq % 2 === 1 ? freq : freq - 1;
        } else {
            while ((count.get(key) || 0) >= 2 && count.has(key * key)) {
                total += 2;
                key = key * key;
            }
            total += 1;
        }
        res = Math.max(res, total);
    }
    return res;
};
