// Question Link: https://leetcode.com/problems/increment-submatrices-by-one
// 2536. Increment Submatrices by One

var rangeAddQueries = function(n, queries) {
    let matrix = Array.from({ length: n }, () => Array(n).fill(0));

    for(let query of queries) {
        for(let row = query[0]; row <= query[2]; row++) {
            for(let col = query[1]; col <= query[3]; col++) {
                matrix[row][col] += 1
            }
        }
    }
    return matrix
};
