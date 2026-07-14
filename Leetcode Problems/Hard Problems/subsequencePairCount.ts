// Question Link: https://leetcode.com/problems/find-the-number-of-subsequences-with-equal-gcd
// 3336. Find the Number of Subsequences With Equal GCD

function subsequencePairCount(nums: number[]): number {
    const MOD = 1000000007, m = Math.max(...nums);

    let dp = Array.from(
        { length: m + 1 },
        () => Array(m + 1).fill(0)
    );

    dp[0][0] = 1;

    const gcd = (a, b) => {
        while (b !== 0) {
            const temp = a % b;
            a = b;
            b = temp;
        }
        return a;
    };

    for (const num of nums) {
        let newDp = Array.from(
            { length: m + 1 },
            () => Array(m + 1).fill(0)
        );

        for (let gcd1 = 0; gcd1 <= m; gcd1++) {
            const nextGcd1 = gcd(gcd1, num);

            for (let gcd2 = 0; gcd2 <= m; gcd2++) {
                const ways = dp[gcd1][gcd2];

                if (ways === 0) {
                    continue;
                }

                const nextGcd2 = gcd(gcd2, num);

                newDp[gcd1][gcd2] =
                    (newDp[gcd1][gcd2] + ways) % MOD;

                newDp[nextGcd1][gcd2] =
                    (newDp[nextGcd1][gcd2] + ways) % MOD;

                newDp[gcd1][nextGcd2] =
                    (newDp[gcd1][nextGcd2] + ways) % MOD;
            }
        }

        dp = newDp;
    }

    let res = 0;

    for (let gcdValue = 1; gcdValue <= m; gcdValue++) {
        res = (res + dp[gcdValue][gcdValue]) % MOD;
    }

    return res;
};
