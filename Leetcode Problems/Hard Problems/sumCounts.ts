// Question Link: https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-ii
// 2916. Subarrays Distinct Element Sum of Squares II

function sumCounts(nums: number[]): number {
    const MOD = 1000000007, n = nums.length;
    let s = new Array(4 * n).fill(0), q = new Array(4 * n).fill(0), lz = new Array(4 * n).fill(0);

    function app(o, len, k) {
        q[o] += 2 * k * s[o] + k * k * len;
        s[o] += k * len;
        lz[o] += k;
    }

    function upd(o, l, r, L, R) {
        if (L <= l && r <= R) { app(o, r - l + 1, 1); return; }
        const m = (l + r) >> 1;
        if (lz[o]) {
            app(2 * o, m - l + 1, lz[o]);
            app(2 * o + 1, r - m, lz[o]);
            lz[o] = 0;
        }
        if (L <= m) upd(2 * o, l, m, L, R);
        if (R > m) upd(2 * o + 1, m + 1, r, L, R);
        s[o] = s[2 * o] + s[2 * o + 1];
        q[o] = q[2 * o] + q[2 * o + 1];
    }

    const last = new Array(100001).fill(-1);
    let res = 0;
    for (let i = 0; i < n; i++) {
        upd(1, 0, n - 1, last[nums[i]] + 1, i);
        last[nums[i]] = i;
        res = (res + (q[1] % MOD)) % MOD;
    }
    return res;
};
