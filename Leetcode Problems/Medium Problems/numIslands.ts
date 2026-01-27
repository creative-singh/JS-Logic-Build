// Question Link: https://leetcode.com/problems/number-of-islands
// 200. Number of Islands

var numIslands = function(grid) {
    let row = grid.length;
    if(row === 0) return grid
    let col = grid[0].length
    let islands = 0

    function dfs(r, c) {
        if(
            r < 0 || r >= row ||
            c < 0 || c >= col ||
            grid[r][c] === "0"
        ) return

        grid[r][c] = "0"

        dfs(r + -1, c)
        dfs(r + 1, c)
        dfs(r, c + -1)
        dfs(r, c + 1)
    }

    for(let r = 0; r < row; r++) {
        for(let c = 0; c < col; c++) {
            if(grid[r][c] === "1") {
                dfs(r, c)
                islands++
            }
        }
    }
    
    return islands
};
