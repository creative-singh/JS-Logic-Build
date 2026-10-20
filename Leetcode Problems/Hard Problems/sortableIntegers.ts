// Question Link: https://leetcode.com/problems/sum-of-sortable-integers
// 3886. Sum of Sortable Integers

function sortableIntegers(nums: number[]): number {
    const n = nums.length;

    function check(k) {
        let prev = 0;
        for (let i = 0; i < n; i += k) {
            let cnt = 0, mini = nums[i], maxi = nums[i];

            for (let j = i; j < i + k - 1; j++) {
                if (nums[j] > nums[j + 1])
                    cnt++;

                mini = Math.min(mini, nums[j + 1]);
                maxi = Math.max(maxi, nums[j + 1]);
            }

            if (nums[i + k - 1] > nums[i])
                cnt++;

            if (cnt > 1 || prev > mini)
                return false;

            prev = maxi;
        }

        return true;
    }

    let res = 0;
    for (let k = 1; k * k <= n; k++) {
        if (n % k === 0) {
            if (check(k))
                res += k;

            const other = n / k;
            if (other !== k && check(other))
                res += other;
        }
    }

    return res;
};
