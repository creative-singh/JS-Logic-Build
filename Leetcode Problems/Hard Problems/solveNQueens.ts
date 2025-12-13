// Question Link: https://leetcode.com/problems/n-queens
// 51. N-Queens

var solveNQueens = function(n) {
    let res = []
    let board = Array.from({ length: n }, () => Array(n).fill("."));

    function isSafe(board, row, col) {
        // Horizontal
        for(let j = 0; j < n; j++) {
            if(board[row][j] === "Q") {
                return false
            }
        }

        // Vertical
        for(let i = 0; i < n; i++) {
            if(board[i][col] === "Q") {
                return false
            }
        }

        // Left Diagonal
        for(let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if(board[i][j] === "Q") {
                return false
            }
        }

        // Right Diagonal
        for(let i = row, j = col; i >= 0 && j < n; i--, j++){
            if(board[i][j] === "Q") {
                return false
            }
        }

        return true;
    }

    function recurse(row, board) {
        if(row === n) {
            res.push(board.map(r => r.join(""))); 
            return
        }

        for(let j = 0; j < n; j++) {
            if(isSafe(board, row, j)) {
                board[row][j] = "Q"
                recurse(row + 1, board)
                board[row][j] = "." // Backtrack
            }
        }

    }

    recurse(0, board)
    return res
}
