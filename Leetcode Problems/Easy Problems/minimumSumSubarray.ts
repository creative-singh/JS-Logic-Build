// Question Link: https://leetcode.com/problems/minimum-positive-sum-subarray
// 3364. Minimum Positive Sum Subarray 

function minimumSumSubarray(nums: number[], l: number, r: number): number {
    const n = nums.length;
    let res = Infinity;

    for (let size = l; size <= r; size++) {
        let sum = 0;
        
        for (let i = 0; i < size; i++) {
            sum += nums[i];
        }
        if (sum > 0) {
            res = Math.min(res, sum);
        }

        for (let i = size; i < n; i++) {
            sum += nums[i];
            sum -= nums[i - size];

            if (sum > 0) {
                res = Math.min(res, sum);
            }
        }
    }

    return res === Infinity ? -1 : res;
};
