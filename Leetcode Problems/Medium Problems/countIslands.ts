// Question Link: https://leetcode.com/problems/count-islands-with-total-value-divisible-by-k
// 3619. Count Islands With Total Value Divisible by K

function countIslands(grid: number[][], k: number): number {
    const m = grid.length, n = grid[0].length;

    const dfs = (i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === 0) return 0;
        let sum = grid[i][j];
        grid[i][j] = 0;
        sum += dfs(i + 1, j);
        sum += dfs(i - 1, j);
        sum += dfs(i, j + 1);
        sum += dfs(i, j - 1);
        return sum;
    };

    let res = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] > 0) {
                const s = dfs(i, j);
                if (s % k === 0) res++;
            }
        }
    }
    return res;
};
