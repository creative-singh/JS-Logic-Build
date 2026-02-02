// Question Link: https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-ii
// 3013. Divide an Array Into Subarrays With Minimum Cost II

var minimumCost = function(nums, k, dist) {
    const n = nums.length;
    const INF = Number.MAX_SAFE_INTEGER;
    let sum = 0;
    let ans = INF;
    const used = new Set();
const heapUsed = new MaxPriorityQueue({
        compare: (a, b) => b[0] - a[0]
    });
    const heapUnused = new MinPriorityQueue({
        compare: (a, b) => a[0] - b[0]
    });
    for (let right = 1; right < n; right++) {
        const left = right - dist - 1;
        if (left > 0 && used.has(left)) {
            used.delete(left);
            sum -= nums[left];
            while (!heapUnused.isEmpty() && heapUnused.front()[1] < left) {
                heapUnused.dequeue();
            }
            if (!heapUnused.isEmpty()) {
                const [val, idx] = heapUnused.dequeue();
                heapUsed.enqueue([val, idx]);
                used.add(idx);
                sum += val;
            }
        }
        if (used.size < k - 1) {
            heapUsed.enqueue([nums[right], right]);
            used.add(right);
            sum += nums[right];
        } else {
            while (!heapUsed.isEmpty() && !used.has(heapUsed.front()[1])) {
                heapUsed.dequeue();
            }
            if (!heapUsed.isEmpty() && nums[right] < heapUsed.front()[0]) {
                const [val, idx] = heapUsed.dequeue();
                used.delete(idx);
                heapUnused.enqueue([val, idx]);
                heapUsed.enqueue([nums[right], right]);
                used.add(right);
                sum += nums[right] - val;
            } else {
                heapUnused.enqueue([nums[right], right]);
            }
        }
        if (left >= 0) {
            ans = Math.min(ans, sum);
        }
    }
    return nums[0] + ans;
};
