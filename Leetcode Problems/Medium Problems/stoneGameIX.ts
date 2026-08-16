// Question Link: https://leetcode.com/problems/stone-game-ix
// 2029. Stone Game IX

function stoneGameIX(stones: number[]): boolean {
    let f = [0, 0, 0];

    for (let c of stones)
        f[c % 3]++;

    if (~f[0] & 1)
        return Math.min(f[1], f[2]) > 0;

    return Math.abs(f[1] - f[2]) > 2;
};
