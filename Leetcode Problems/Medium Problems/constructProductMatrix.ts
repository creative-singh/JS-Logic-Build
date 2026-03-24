// Question Link: https://leetcode.com/problems/construct-product-matrix
// 2906. Construct Product Matrix

function constructProductMatrix(grid: number[][]): number[][] {
    const m = grid.length, n = grid[0].length, modulo = 12345;

    let res = Array.from(
        { length: m },
        () => Array(n).fill(0)
    );
    let suffix = 1;
    for (let row = m - 1; row >= 0; row--) {
        for (let col = n - 1; col >= 0; col--) {
            res[row][col] = suffix;
            suffix = (suffix * grid[row][col]) % modulo
        }
    }

    let prefix = 1;
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            res[row][col] = (res[row][col] * prefix) % modulo;
            prefix = (prefix * grid[row][col]) % modulo
        }
    }
    return res;
};
