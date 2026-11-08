// Question Link: https://leetcode.com/problems/count-servers-that-communicate
// 1267. Count Servers that Communicate

function countServers(grid: number[][]): number {
    // servers on each row
    const rows = grid.map(row => row.reduce((a, b) => a + b));
    // servers on each column
    const cols = grid[0].map((_, j) => grid.reduce((sum, row) => sum + row[j], 0));

    let res = 0;
    for (const [i, row] of grid.entries())
        for (const [j, server] of row.entries())
            if (server && rows[i] + cols[j] > 2) 
                res++;  // counted in both, so more than 2 means company

    return res;
};
