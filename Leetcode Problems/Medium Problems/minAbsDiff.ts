// Question Link: https://leetcode.com/problems/minimum-absolute-difference-in-sliding-submatrix
// 3567. Minimum Absolute Difference in Sliding Submatrix

function minAbsDiff(grid: number[][], k: number): number[][] {
    const m = grid.length, n = grid[0].length;
    let ans = Array.from(
        { length: m - k + 1 },
        () => new Array(n - k + 1).fill(0)
    );

    for (let i = 0; i <= m - k; i++) {
        for (let j = 0; j <= n - k; j++) {
            const v = [];
            for (let x = i; x < i + k; x++) {
                for (let y = j; y < j + k; y++) {
                    v.push(grid[x][y])
                }
            }
            v.sort((a, b) => a - b)
            const unique = [...new Set(v)]

            if (unique.length <= 1) {
                ans[i][j] = 0
                continue
            }

            let mn = Infinity;
            for (let p = 0; p < unique.length - 1; p++) {
                mn = Math.min(mn, unique[p + 1] - unique[p])
            }
            ans[i][j] = mn
        }
    }
    return ans;
};
