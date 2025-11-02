// Question Link: https://leetcode.com/problems/count-unguarded-cells-in-the-grid
// 2257. Count Unguarded Cells in the Grid

function countUnguarded(m, n, guards, walls) {
    const grid = new Array(m);
    for (let i = 0; i < m; i++)  grid[i] = (new Array(n)).fill(0);

    for (let i = 0; i < walls.length; i++) {
        const [r, c] = walls[i];
        grid[r][c] = 'W';
    }

    for (let i = 0; i < guards.length; i++) {
        const [r, c] = guards[i];
        grid[r][c] = 'G';
    }

    for (let i = 0; i < guards.length; i++) {
        const [r, c] = guards[i];
        setSight(r, c);
    }

    function setSight(r, c) {
        for (let i = r - 1; i >= 0; i--) {
            if (grid[i][c] !== 0 && grid[i][c] !== 'S') break;
            grid[i][c] = 'S';
        }
        for (let i = r + 1; i < m; i++) {
            if (grid[i][c] !== 0 && grid[i][c] !== 'S') break;
            grid[i][c] = 'S';
        }


        for (let j = c - 1; j >= 0; j--) {
            if (grid[r][j] !== 0 && grid[r][j] !== 'S') break;
            grid[r][j] = 'S';
        }
        for (let j = c + 1; j < n; j++) {
            if (grid[r][j] !== 0 && grid[r][j] !== 'S') break;
            grid[r][j] = 'S';
        }
    }

    let count = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                count++;
            }
        }
    }

    return count;
};
