// Question Link: https://leetcode.com/problems/equal-sum-grid-partition-i
// 3546. Equal Sum Grid Partition I

function canPartitionGrid(grid: number[][]): boolean {
    const m = grid.length, n = grid[0].length;
    const rowSum = new Array(m).fill(0);
    const colSum = new Array(n).fill(0);

    // calculate total row & col sum
    for(let row = 0; row < m; row++) {
        for(let col = 0; col < n; col++) {
            rowSum[row] += grid[row][col]
            colSum[col] += grid[row][col]
        }
    }

    // prefix sums
    for(let row = 1; row < m; row++) {
        rowSum[row] += rowSum[row - 1]
    }
    for(let col = 1; col < n; col++) {
        colSum[col] += colSum[col - 1]
    }

    // horizontal cuts
    for(let r = 0; r < m - 1; r++) {
        if(checkSum(r, rowSum, m)) return true;
    }

    // vertical cuts
    for(let c = 0; c < n - 1; c++) {
        if(checkSum(c, colSum, n)) return true;
    }
    return false
};

function checkSum(startingPoint, sumArr, length) {
    const total = sumArr[length - 1];
    return sumArr[startingPoint] === total - sumArr[startingPoint]
}
