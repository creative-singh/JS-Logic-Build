// Question Link: https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-i
// 3195. Find the Minimum Area to Cover All Ones I

var minimumArea = function(grid) {
    let minRow = Infinity;
    let maxRow = -1;
    let minCol = Infinity;
    let maxCol = -1;

    for(let r = 0; r < grid.length; r++) {
        for(let c = 0; c < grid[0].length; c++) {
            if(grid[r][c] === 1) {
                minRow = Math.min(r, minRow)
                maxRow = Math.max(r, maxRow)
                minCol = Math.min(c, minCol)
                maxCol = Math.max(c, maxCol)
            }
        }
    }
    return (maxRow - minRow + 1) * (maxCol - minCol + 1)
};
