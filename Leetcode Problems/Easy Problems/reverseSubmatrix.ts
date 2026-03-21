// Question Link: https://leetcode.com/problems/flip-square-submatrix-vertically
// 3643. Flip Square Submatrix Vertically

var reverseSubmatrix = function (grid, x, y, k) {
    for (let j = y; j <= y + k - 1; j++) {
        for (let i = 0; i < Math.floor(k / 2); i++) {
            // swap
            [grid[x + i][j], grid[x + k - i - 1][j]] = [grid[x + k - i - 1][j], grid[x + i][j]];
        }
    }
    return grid;
};
