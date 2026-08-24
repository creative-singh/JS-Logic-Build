// Question Link: https://leetcode.com/problems/stone-game-viii
// 1872. Stone Game VIII

function stoneGameVIII(stones: number[]): number {
    const n = stones.length, prefix = [...stones];

    // Build prefix sums
    for (let i = 1; i < n; i++) {
        prefix[i] += prefix[i - 1];
    }

    // If Alice takes all stones
    // the game ends immediately.
    let best = prefix[n - 1];

    // Try every earlier valid prefix
    for (let i = n - 2; i >= 1; i--) {
        best = Math.max(best, prefix[i] - best);
    }

    return best;
};
