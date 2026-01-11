// Question Link: https://leetcode.com/problems/maximal-rectangle
// 85. Maximal Rectangle

function maximalRectangle(matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0)
        return 0;

    const r = matrix.length;
    const c = matrix[0].length;

    // row-wise prefix widths
    for (let i = 0; i < r; i++) {
        for (let j = 1; j < c; j++) {
            if (matrix[i][j] === "1") {
                matrix[i][j] = Number(matrix[i][j]) + Number(matrix[i][j - 1]);
            }
        }
    }

    let res = 0;

    // fix each column
    for (let j = 0; j < c; j++) {
        for (let i = 0; i < r; i++) {
            let width = Number(matrix[i][j]);
            if (width === 0) continue;

            // downward
            let currWidth = width;
            for (let k = i; k < r && matrix[k][j] > 0; k++) {
                currWidth = Math.min(currWidth, Number(matrix[k][j]));
                const height = k - i + 1;
                res = Math.max(res, currWidth * height);
            }

            // upward
            currWidth = width;
            for (let k = i; k >= 0 && matrix[k][j] > 0; k--) {
                currWidth = Math.min(currWidth, Number(matrix[k][j]));
                const height = i - k + 1;
                res = Math.max(res, currWidth * height);
            }
        }
    }

    return res;
}
