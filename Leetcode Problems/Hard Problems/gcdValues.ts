// Question Link: https://leetcode.com/problems/sorted-gcd-pair-queries
// 3312. Sorted GCD Pair Queries

function gcdValues(nums: number[], queries: number[]): number[] {
    const maxValue = Math.max(...nums);
    let freq = Array(maxValue + 1).fill(0);

    for (const num of nums) {
        freq[num]++;
    }

    let count = Array(maxValue + 1).fill(0);

    for (let gcdValue = maxValue; gcdValue >= 1; gcdValue--) {
        let total = 0;

        for (
            let multiple = gcdValue;
            multiple <= maxValue;
            multiple += gcdValue
        ) {
            total += freq[multiple];
        }

        let pairs = total * (total - 1) / 2;

        for (
            let multiple = 2 * gcdValue;
            multiple <= maxValue;
            multiple += gcdValue
        ) {
            pairs -= count[multiple];
        }

        count[gcdValue] = pairs;
    }

    let prefix = [], values = [], sum = 0, result = [];

    for (let gcdValue = 1; gcdValue <= maxValue; gcdValue++) {
        if (count[gcdValue] > 0) {
            sum += count[gcdValue];
            prefix.push(sum);
            values.push(gcdValue);
        }
    }

    for (const query of queries) {
        const target = query + 1;

        let left = 0, right = prefix.length;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);

            if (prefix[mid] < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        result.push(values[left]);
    }

    return result;
};
