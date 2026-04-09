// Question Link: https://leetcode.com/problems/xor-after-range-multiplication-queries-ii
// 3655. XOR After Range Multiplication Queries II

var xorAfterQueries = function (nums, queries) {
    const MOD = 1000000007n, n = nums.length;
    const square = Math.floor(Math.sqrt(n)) + 1;
    let numL = nums.map(BigInt);
    let small = new Map();

    const power = (base, exp) => {
        let res = 1n;
        base %= MOD;
        while (exp > 0n) {
            if (exp % 2n === 1n)
                res = (res * base) % MOD;
            base = (base * base) % MOD;
            exp /= 2n;
        }
        return res;
    };

    for (let [l, r, k, v] of queries) {
        if (k >= square) {
            for (let idx = l; idx <= r; idx += k)
                numL[idx] = (numL[idx] * BigInt(v)) % MOD;
        } else {
            if (!small.has(k)) small.set(k, []);
            small.get(k).push([l, r, BigInt(v)]);
        }
    }

    let factors = new BigUint64Array(n).fill(1n);
    for (let [k, qlist] of small) {
        let events = Array.from({ length: k }, () => []);
        for (let [l, r, v] of qlist) {
            let res = l % k;
            let last = l + Math.floor((r - l) / k) * k;
            events[res].push([l, v]);
            if (last + k < n)
                events[res].push([last + k, power(v, MOD - 2n)]);
        }

        for (let res = 0; res < k; res++) {
            events[res].sort((a, b) => a[0] - b[0]);
            let cur = 1n, ptr = 0;
            for (let i = res; i < n; i += k) {
                while (ptr < events[res].length && events[res][ptr][0] === i) {
                    cur = (cur * events[res][ptr][1]) % MOD;
                    ptr++;
                }
                factors[i] = (factors[i] * cur) % MOD;
            }
        }
    }

    let ans = 0;
    for (let i = 0; i < n; i++)
        ans ^= Number((numL[i] * factors[i]) % MOD);
    return ans;
};
