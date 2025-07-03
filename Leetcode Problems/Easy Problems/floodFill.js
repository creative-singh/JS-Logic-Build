// Question Link: https://leetcode.com/problems/flood-fill
// 733. Flood Fill

var floodFill = function(image, sr, sc, color) {
    let currColor = image[sr][sc]
    if(currColor === color) 
        return image
    
    let directions = [[-1, 0], [1, 0], [0, 1], [0, -1]];

    function dfs(row, col) {
        image[row][col] = color

        for(let [dirRow, dirCol] of directions) {
            let currRow = row + dirRow
            let currCol = col + dirCol
            if(
                currRow >= 0 && currRow < image.length &&
                currCol >= 0 && currCol < image[0].length && 
                image[currRow][currCol] === currColor
            ) {
                dfs(currRow, currCol)
            }
        }
    }

    dfs(sr, sc)
    return image
};