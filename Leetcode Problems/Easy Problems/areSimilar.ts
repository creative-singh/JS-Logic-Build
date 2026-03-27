// Question Link: https://leetcode.com/problems/matrix-similarity-after-cyclic-shifts
// 2946. Matrix Similarity After Cyclic Shifts

function areSimilar(mat: number[][], k: number): boolean {
    const m = mat.length, n = mat[0].length, shift = k % n;

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(i % 2 === 0) {
                if(mat[i][j] !== mat[i][(j + shift) % n]) return false
            } else {
                if(mat[i][j] !== mat[i][(j + n - shift) % n]) return false
            }
        }
    }
    return true
};
