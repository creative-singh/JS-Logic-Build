// Question Link: https://leetcode.com/problems/rotting-oranges
// 994. Rotting Oranges

var orangesRotting = function(grid) {
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    let queue = []
    let fresh = 0;
    let minutes = 0;

    const row = grid.length; const col = grid[0].length;

    for(let r = 0; r < row; r++) {
        for(let c = 0; c < col; c++) {
            if(grid[r][c] === 2) queue.push([r, c])
            if(grid[r][c] === 1) fresh++
        }
    }

    // BFS
    let size
    while(queue.length && fresh > 0) {
        size = queue.length
        for(let i = 0; i < size; i++) {
            const [currRow, currCol] = queue.shift()

            for(let [dRow, dCol] of directions) {
                const newRow = currRow + dRow
                const newCol = currCol + dCol

                if(
                    newRow >= 0 && newRow < row &&
                    newCol >= 0 && newCol < col &&
                    grid[newRow][newCol] == 1
                ) {
                    grid[newRow][newCol] = 2
                    fresh--
                    queue.push([newRow, newCol])
                }
            }
        }
        minutes++
    }

    return fresh == 0 ? minutes : -1
};
