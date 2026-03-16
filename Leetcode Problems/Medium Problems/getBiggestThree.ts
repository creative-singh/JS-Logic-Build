// Question Link: https://leetcode.com/problems/get-biggest-three-rhombus-sums-in-a-grid
// 1878. Get Biggest Three Rhombus Sums in a Grid

var getBiggestThree = function (grid) {
    const m = grid.length, n = grid[0].length;
    let set = new Set();

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            set.add(grid[i][j]);

            for (let k = 1; ; k++) {
                if (i - k < 0 || i + k >= m || j - k < 0 || j + k >= n) break;

                let sum = 0;

                let r = i - k, c = j;
                for (let t = 0; t < k; t++) sum += grid[r + t][c + t];

                r = i; c = j + k;
                for (let t = 0; t < k; t++) sum += grid[r + t][c - t];

                r = i + k; c = j;
                for (let t = 0; t < k; t++) sum += grid[r - t][c - t];

                r = i; c = j - k;
                for (let t = 0; t < k; t++) sum += grid[r - t][c + t];

                set.add(sum);
            }
        }
    }

    return Array.from(set).sort((a, b) => b - a).slice(0, 3)
};
