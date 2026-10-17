// Question Link: https://leetcode.com/problems/minimum-swaps-to-sort-by-digit-sum
// 3551. Minimum Swaps to Sort by Digit Sum

function minSwaps(nums: number[]): number {
    const n = nums.length;
    
    const digitSum = (x) => {
        let s = 0;
        while (x > 0) {
            s += x % 10;
            x = Math.floor(x / 10);
        }
        return s;
    };

    const sorted = [...nums].sort((a, b) => {
        const sa = digitSum(a), sb = digitSum(b);
        if (sa !== sb) return sa - sb;
        return a - b;
    });

    let pos = new Map(), visited = new Array(n).fill(false), cycles = 0;
    for (let i = 0; i < n; i++) pos.set(sorted[i], i);

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            cycles++;
            let j = i;
            while (!visited[j]) {
                visited[j] = true;
                j = pos.get(nums[j]);
            }
        }
    }

    return n - cycles;
};
