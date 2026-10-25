// Question Link: https://leetcode.com/problems/number-of-closed-island
// 1254. Number of Closed Islands

function closedIsland(grid: number[][]): number {
    const m = grid.length, n = grid[0].length;

    const dfs = (r, c) => {
        if (r < 0 || c < 0 || r >= m || c >= n || grid[r][c] !== 0) return;
        grid[r][c] = 1;
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if ((i === 0 || j === 0 || i === m - 1 || j === n - 1) && grid[i][j] === 0) {
                dfs(i, j);
            }
        }
    }

    let count = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                count++;
                dfs(i, j);
            }
        }
    }
    return count;
};
