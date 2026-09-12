// Question Link: https://leetcode.com/problems/maximum-score-of-non-overlapping-intervals
// 3414. Maximum Score of Non-overlapping Intervals

function maximumWeight(intervals: number[][]): number[] {
    const n = intervals.length;
    const a = intervals.map(([start, end, w], i) => [start, end, w, i]);

    a.sort((x, y) => x[1] - y[1]);

    const dp = Array.from({ length: n + 1 }, () => Array(5).fill(0));
    const ids = Array.from(
        { length: n + 1 },
        () => Array.from({ length: 5 }, () => [])
    );

    function smaller(a, b) {
        const len = Math.min(a.length, b.length);

        for (let i = 0; i < len; i++) {
            if (a[i] !== b[i]) {
                return a[i] < b[i];
            }
        }

        return a.length < b.length;
    }

    for (let i = 1; i <= n; i++) {
        const [start, end, w, id] = a[i - 1];

        let lo = 1, hi = i - 1, prev = 0;

        while (lo <= hi) {
            const mid = Math.floor((lo + hi) / 2);

            if (a[mid - 1][1] < start) {
                prev = mid;
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }

        for (let k = 1; k <= 4; k++) {
            const skip = dp[i - 1][k], take = dp[prev][k - 1] + w;

            const chosen = [...ids[prev][k - 1], id];
            chosen.sort((x, y) => x - y);

            if (take > skip ||
                (take === skip && smaller(chosen, ids[i - 1][k]))) {
                dp[i][k] = take;
                ids[i][k] = chosen;
            } else {
                dp[i][k] = skip;
                ids[i][k] = ids[i - 1][k];
            }
        }
    }

    return ids[n][4];
};
