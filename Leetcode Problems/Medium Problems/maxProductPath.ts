// Question Link: https://leetcode.com/problems/maximum-non-negative-product-in-a-matrix
// 1594. Maximum Non Negative Product in a Matrix

function maxProductPath(grid: number[][]): number {
    const m = grid.length, n = grid[0].length, MOD = 1000000007;

    // Create DP arrays to store the maximum and minimum products up to each cell
    const maxProduct = Array.from({ length: m }, () => Array(n).fill(0));
    const minProduct = Array.from({ length: m }, () => Array(n).fill(0));

    // Initialize the starting cell
    maxProduct[0][0] = grid[0][0];
    minProduct[0][0] = grid[0][0];

    // Fill the first row (can only come from the left)
    for (let j = 1; j < n; j++) {
        maxProduct[0][j] = maxProduct[0][j - 1] * grid[0][j];
        minProduct[0][j] = minProduct[0][j - 1] * grid[0][j];
    }

    // Fill the first column (can only come from the top)
    for (let i = 1; i < m; i++) {
        maxProduct[i][0] = maxProduct[i - 1][0] * grid[i][0];
        minProduct[i][0] = minProduct[i - 1][0] * grid[i][0];
    }

    // Traverse the rest of the grid
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (grid[i][j] >= 0) {
                maxProduct[i][j] = Math.max(maxProduct[i - 1][j], maxProduct[i][j - 1]) * grid[i][j];
                minProduct[i][j] = Math.min(minProduct[i - 1][j], minProduct[i][j - 1]) * grid[i][j];
            } else {
                maxProduct[i][j] = Math.min(minProduct[i - 1][j], minProduct[i][j - 1]) * grid[i][j];
                minProduct[i][j] = Math.max(maxProduct[i - 1][j], maxProduct[i][j - 1]) * grid[i][j];
            }
        }
    }

    // The maximum product at the bottom-right corner
    const result = maxProduct[m - 1][n - 1];

    // Return result if non-negative, else -1
    return result >= 0 ? result % MOD : -1;
}
