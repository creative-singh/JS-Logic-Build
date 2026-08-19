// https://leetcode.com/problems/find-the-largest-almost-missing-integer
// 3471. Find the Largest Almost Missing Integer

function largestInteger(nums: number[], k: number): number {
    const n = nums.length, cnt = new Array(51).fill(0);

    for (let i = 0; i + k <= n; i++) {
        let seen = new Array(51).fill(false);

        for (let j = i; j < i + k; j++) {
            seen[nums[j]] = true;
        }
        for (let k = 0; k <= 50; k++) {
            if (seen[k])
                cnt[k]++;
        }
    }
    for (let i = 50; i >= 0; i--) {
        if (cnt[i] === 1) return i
    }
    return -1;
};
