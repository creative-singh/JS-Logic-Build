// Question Link: https://leetcode.com/problems/count-submatrices-with-top-left-element-and-sum-less-than-k
// 3070. Count Submatrices with Top-Left Element and Sum Less Than k

var countSubmatrices = function (grid, k) {
    const m = grid.length, n = grid[0].length;
    let res = 0, temp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            temp[i + 1][j + 1] = grid[i][j] + temp[i][j + 1] + temp[i + 1][j] - temp[i][j];
            if(temp[i + 1][j + 1] <= k)
                res++;
        }
    }
    return res;
};
