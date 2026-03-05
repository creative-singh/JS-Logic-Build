// Question Link: https://leetcode.com/problems/special-positions-in-a-binary-matrix
// 1582. Special Positions in a Binary Matrix

function numSpecial(mat: number[][]): number {
    let mapRow = new Map(), mapCol = new Map(), ones = [];

    const m = mat.length, n = mat[0].length;

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (mat[row][col] === 1) {
                mapRow.set(row, (mapRow.get(row) || 0) + 1)
                mapCol.set(col, (mapCol.get(col) || 0) + 1)
                ones.push([row, col])
            }
        }
    }

    let ans = 0;
    for(let [row, col] of ones) {
        if(mapRow.get(row) === 1 && mapCol.get(col) === 1) {
            ans++;
        }
    }
    return ans;
};
