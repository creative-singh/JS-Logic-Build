// Question Link: https://leetcode.com/problems/word-search
// 79. Word Search

function exist(board, word) {
    // directions -> forward, backward, up, down
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const N = word.length

    function find(i, j, idx) {
        if (idx >= N)
            return true;

        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[idx])
            return false;

        const temp = board[i][j];
        board[i][j] = '$';

        for (const dir of directions) {
            const i_ = i + dir[0];
            const j_ = j + dir[1];

            if (find(i_, j_, idx + 1))
                return true;
        }

        board[i][j] = temp;
        return false;
    }

    const m = board.length;
    const n = board[0].length;

    if (m * n < N)
        return false;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0] && find(i, j, 0)) {
                return true;
            }
        }
    }

    return false;
}
