// Question Link: https://leetcode.com/problems/stone-game-iv
// 1510. Stone Game IV

function winnerSquareGame(n: number): boolean {
    let dp = Array.from({ length: n + 1 }, () => [0, 0]);
    return game(n, true, dp);
};

function game(n, isAlice, dp) {
    let isAliceIdx = isAlice ? 1 : 0;

    if (dp[n][isAliceIdx] !== 0) return dp[n][isAliceIdx] === 1;

    let c = 1, best = !isAlice, i = 1;

    while (c <= n) {
        if (!isAlice) {
            if (!game(n - c, true, dp)) {
                best = false;
                break;
            }
        } else {
            if (game(n - c, false, dp)) {
                best = true;
                break;
            }
        }
        i++;
        c = i * i;
    }
    dp[n][isAliceIdx] = best ? 1 : 2;
    return best;
};
