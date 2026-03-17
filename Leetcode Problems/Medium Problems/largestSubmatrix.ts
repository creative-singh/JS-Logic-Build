// Question Link: https://leetcode.com/problems/largest-submatrix-with-rearrangements
// 1727. Largest Submatrix With Rearrangements

function largestSubmatrix(matrix: number[][]): number {
    const m = matrix.length, n = matrix[0].length;
    let heights = Array(n).fill(0), maxArea = 0;

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (matrix[r][c]) {
                heights[c] += 1;
            } else {
                heights[c] = 0;
            }
        }

        let sorted = [...heights].sort((a, b) => b - a);

        for (let i = 0; i < n; i++) {
            maxArea = Math.max(maxArea, sorted[i] * (i + 1));
        }
    }

    return maxArea;
};
