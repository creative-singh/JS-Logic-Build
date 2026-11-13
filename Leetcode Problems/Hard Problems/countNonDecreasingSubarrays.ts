// Question Link: https://leetcode.com/problems/count-non-decreasing-subarrays-after-k-operations
// 3420. Count Non-Decreasing Subarrays After K Operations


function countNonDecreasingSubarrays(nums: number[], k: number): number {
    const n = nums.length;
    const starts = new Int32Array(n);  
    let head = n, tail = n, ans = 0, water = 0, r = n - 1;

    for (let l = n - 1; l >= 0; l--) {
        const x = nums[l];
        while (head < tail && nums[starts[head]] <= x) {  
            const s = starts[head++], end = head < tail ? starts[head] : r + 1;
            water += (x - nums[s]) * (end - s);
        }

        starts[--head] = l;

        while (water > k) { 
            water -= nums[starts[tail - 1]] - nums[r];
            if (starts[tail - 1] === r) tail--;
            r--;
        }
        ans += r - l + 1;
    }
    return ans;
};
