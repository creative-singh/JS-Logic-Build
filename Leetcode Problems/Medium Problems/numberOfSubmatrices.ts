// Question Link: https://leetcode.com/problems/count-submatrices-with-equal-frequency-of-x-and-y
// 3212. Count Submatrices With Equal Frequency of X and Y

function numberOfSubmatrices(grid: string[][]): number {
    const m = grid.length, n = grid[0].length;
    let row = new Array(n).fill(0);
    let col = new Array(n).fill(0);
    let res = 0;

    for(let i = 0; i < m; i++) {
        let x = 0, y = 0;

        for(let j = 0; j < n; j++) {
            if(grid[i][j] === "X") {
                x++;
            } else if(grid[i][j] === "Y") {
                y++;
            }

            row[j] += x
            col[j] += y

            if(row[j] === col[j] && row[j] > 0) {
                res++
            }
        }
    }
    return res;
};
