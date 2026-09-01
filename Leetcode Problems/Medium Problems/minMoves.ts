// Question Link: https://leetcode.com/problems/minimum-moves-to-clean-the-classroom
// 3568. Minimum Moves to Clean the Classroom

function minMoves(classroom: string[], energy: number): number {
    const m = classroom.length, n = classroom[0].length;
    const litterId = Array.from({ length: m }, () => new Array(n).fill(-1));

    let k = 0, sr = 0, sc = 0;

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (classroom[r][c] === 'S') {
                sr = r;
                sc = c;
            } else if (classroom[r][c] === 'L') {
                litterId[r][c] = k++;
            }
        }
    }

    if (k === 0)
        return 0;

    const fullMask = (1 << k) - 1, queue = [];
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let front = 0;

    const best = Array.from({ length: m }, () =>
        Array.from({ length: n }, () => new Array(1 << k).fill(-1))
    );

    best[sr][sc][0] = energy;
    queue.push([sr, sc, 0, energy, 0]);

    while (front < queue.length) {
        const [r, c, mask, e, moves] = queue[front++];

        for (const [dr, dc] of dirs) {
            const nr = r + dr, nc = c + dc;

            if (nr < 0 || nr >= m || nc < 0 || nc >= n)
                continue;

            if (classroom[nr][nc] === 'X')
                continue;

            let ne = e - 1, nmask = mask;

            if (ne < 0)
                continue;

            if (classroom[nr][nc] === 'R')
                ne = energy;

            if (classroom[nr][nc] === 'L')
                nmask |= 1 << litterId[nr][nc];

            if (nmask === fullMask)
                return moves + 1;

            if (ne <= best[nr][nc][nmask])
                continue;

            best[nr][nc][nmask] = ne;
            queue.push([nr, nc, nmask, ne, moves + 1]);
        }
    }
    return -1;
};
