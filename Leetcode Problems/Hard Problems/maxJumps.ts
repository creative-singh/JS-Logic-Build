// Question Link: https://leetcode.com/problems/jump-game-v/
// 1340. Jump Game V

function maxJumps(arr: number[], d: number): number {
    const n = arr.length;
    const dp = new Array(n).fill(-1);

    function dfs(i) {
        if (dp[i] !== -1)
            return dp[i];

        let best = 1;

        for (let nxt = i + 1; nxt < Math.min(n, i + d + 1); nxt++) {
            if (arr[nxt] >= arr[i])
                break;

            best = Math.max(best, 1 + dfs(nxt));
        }

        for (let nxt = i - 1; nxt > Math.max(-1, i - d - 1); nxt--) {
            if (arr[nxt] >= arr[i])
                break;

            best = Math.max(best, 1 + dfs(nxt));
        }

        dp[i] = best;
        return dp[i];
    }

    return Math.max(...arr.map((_, i) => dfs(i)));
};
