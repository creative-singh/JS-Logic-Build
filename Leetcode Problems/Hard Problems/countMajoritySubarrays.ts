// Question Link: https://leetcode.com/problems/count-subarrays-with-majority-element-ii
// 3739. Count Subarrays With Majority Element II

function countMajoritySubarrays(nums: number[], target: number): number {
    const n = nums.length;
    let pref = n;

    const freq = new Array(2 * n + 1).fill(0);
    freq[n] = 1;

    let less = 0, ans = 0;

    for (const num of nums) {
        if (num === target) {
            less += freq[pref];
            pref++;
        } else {
            pref--;
            less -= freq[pref];
        }

        freq[pref]++;
        ans += less;
    }

    return ans;
};
