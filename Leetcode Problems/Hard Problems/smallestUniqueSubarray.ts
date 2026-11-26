// Question Link: https://leetcode.com/problems/smallest-unique-subarray
// 3934. Smallest Unique Subarray

var smallestUniqueSubarray = function(nums) {
    const MOD = 1000000007n, BASE = 13n, n = nums.length;

    const binpow = (a, b) => {
        let ret = 1n;
        a %= MOD;
        while (b > 0n) {
            if (b & 1n) ret = (ret * a) % MOD;
            a = (a * a) % MOD;
            b >>= 1n;
        }
        return ret;
    };

    const computeHash = (i, j) => {
        let p = 1n, ret = 0n;

        for (let idx = i; idx <= j; idx++) {
            ret = (ret + (BigInt(nums[idx]) * p) % MOD) % MOD;
            p = (p * BASE) % MOD;
        }
        return ret;
    };

    const check = (m) => {
        const mp = new Map();
        let x = computeHash(0, m - 1);
        const p = binpow(BASE, BigInt(m - 1)), inv = binpow(BASE, MOD - 2n);

        mp.set(x, 1);

        for (let i = 0, j = m; j < n; i++, j++) {
            x = ((x - BigInt(nums[i])) % MOD + MOD) % MOD;
            x = (x * inv) % MOD;
            x = (x + (BigInt(nums[j]) * p) % MOD) % MOD;
            mp.set(x, (mp.get(x) || 0) + 1);
        }

        for (const count of mp.values()) {
            if (count === 1) return true;
        }
        return false;
    };

    let low = 1, high = n, res = n;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (check(mid)) {
            res = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return res;
};
