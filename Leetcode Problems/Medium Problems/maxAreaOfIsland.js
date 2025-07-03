// Question Link: https://leetcode.com/problems/max-area-of-island/description/
// 695. Max Area of Island

var maxAreaOfIsland = function(grid) {
    const tempRow = grid.length; const tempCol = grid[0].length 
    let visited = Array.from({ length: tempRow }, () => Array(tempCol).fill(0))
    // up, down, left, right
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let max = 0;

    for(let row = 0; row < tempRow; row++) {
        for(let col = 0; col < tempCol; col++) {
            if(grid[row][col] && !visited[row][col]) {
                bfs(row, col)
            }
        }
    }

    function bfs(row, col) {
        visited[row][col] = 1
        let queue = []
        queue.push([row, col])
        let tMax = 1

        while(queue.length) {
            const [currRow, currCol] = queue.shift()

            // traverse neighbours and mark them
            for(let [dRow, dCol] of directions) {
                const nRow = currRow + dRow;
                const nCol = currCol + dCol;

                if(
                    nRow >= 0 && nRow < tempRow && nCol >= 0 && nCol < tempCol && 
                    grid[nRow][nCol] === 1 && !visited[nRow][nCol]
                ) {
                    visited[nRow][nCol] = 1;
                    queue.push([nRow, nCol])
                    tMax++
                }
            }
            max = Math.max(tMax, max)
        }
    }

    return max
};