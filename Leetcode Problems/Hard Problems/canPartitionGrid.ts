// Question Link: https://leetcode.com/problems/equal-sum-grid-partition-ii
// 3548. Equal Sum Grid Partition II

function canPartitionGrid(grid: number[][]): boolean {
    let total = 0;
    const m = grid.length, n = grid[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            total += grid[i][j];
        }
    }

    const rotate = (g) => {
        const r = g.length, c = g[0].length;
        let tmp = Array.from({ length: c }, () => Array(r).fill(0));

        for (let i = 0; i < r; i++) {
            for (let j = 0; j < c; j++) {
                tmp[j][r - 1 - i] = g[i][j];
            }
        }
        return tmp;
    };

    let currentGrid = grid;
    for (let r = 0; r < 4; r++) {
        let visited = new Set();
        visited.add(0);
        let vals = 0;
        const rLen = currentGrid.length;
        const cLen = currentGrid[0].length;

        if (rLen < 2) {
            currentGrid = rotate(currentGrid);
            continue;
        }

        if (cLen === 1) {
            for (let i = 0; i < rLen - 1; i++) {
                vals += currentGrid[i][0];
                const flag = vals * 2 - total;
                if (flag === 0 || flag === currentGrid[0][0] || flag === currentGrid[i][0]) {
                    return true;
                }
            }
        } else {
            for (let i = 0; i < rLen - 1; i++) {
                for (let j = 0; j < cLen; j++) {
                    visited.add(currentGrid[i][j]);
                    vals += currentGrid[i][j];
                }
                const flag = vals * 2 - total;
                if (i === 0) {
                    if (flag === 0 || flag === currentGrid[0][0] || flag === currentGrid[0][cLen - 1]) {
                        return true;
                    }
                } else if (visited.has(flag)) {
                    return true;
                }
            }
        }
        currentGrid = rotate(currentGrid);
    }
    return false;
};
