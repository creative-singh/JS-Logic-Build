// Question Link: https://leetcode.com/problems/find-all-possible-stable-binary-arrays-i
// 3129. Find All Possible Stable Binary Arrays I

const MOD = 1e9 + 7
let dp: number[][][] = []
let limit: number = -1

function dfs(zero: number, one: number, useOne: 0 | 1): number {
    if (zero === 0 && one === 0) {
        return 1
    }

    if (dp[useOne][one][zero] !== -1) {
        return dp[useOne][one][zero]
    }

    let totalArrays = 0
    if (useOne) {
        for (let oneStreak = 1; oneStreak <= Math.min(one, limit); oneStreak++) {
            totalArrays = (totalArrays + dfs(zero, one - oneStreak, 0)) % MOD
        }
    } else {
        for (let zeroStreak = 1; zeroStreak <= Math.min(zero, limit); zeroStreak++) {
            totalArrays = (totalArrays + dfs(zero - zeroStreak, one, 1)) % MOD
        }
    }

    dp[useOne][one][zero] = totalArrays
    return totalArrays
}

function numberOfStableArrays(zero: number, one: number, _limit: number): number {
    limit = _limit
    dp = new Array(2)
        .fill(0)
        .map(() => new Array(one + 1)
            .fill(0)
            .map(() => new Array(zero + 1).fill(-1)))

    return (dfs(zero, one, 0) + dfs(zero, one, 1)) % MOD
}
