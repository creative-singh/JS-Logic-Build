// Question Link: https://leetcode.com/problems/block-placement-queries
// 3161. Block Placement Queries

function getResults(queries: number[][]): boolean[] {
    let maxX = 0;

    for (const q of queries) {
        maxX = Math.max(maxX, q[1]);
    }

    let n = 1;
    while (n <= maxX + 1) n *= 2;
    const tree = new Int32Array(2 * n);

    const update = (i, val) => {
        for (tree[i += n] = val; i > 1; i >>= 1) {
            tree[i >> 1] = Math.max(tree[i], tree[i ^ 1]);
        }
    };

    const query = (r) => {
        let res = 0;
        for (let l = n, r_idx = r + n + 1; l < r_idx; l >>= 1, r_idx >>= 1) {
            if (l & 1)
                res = Math.max(res, tree[l++]);
            if (r_idx & 1)
                res = Math.max(res, tree[--r_idx]);
        }
        return res;
    };

    const obstacles = [0];
    const res = [];

    for (const q of queries) {
        const type = q[0];
        const x = q[1];
        let l = 0, r = obstacles.length;
        while (l < r) {
            const mid = (l + r) >> 1;
            if (obstacles[mid] > x)
                r = mid;
            else l = mid + 1;
        }
        const idx = l;

        if (type === 1) {
            const prev = obstacles[idx - 1];
            const nxt = idx < obstacles.length ? obstacles[idx] : -1;

            update(x, x - prev);
            if (nxt !== -1) {
                update(nxt, nxt - x);
            }
            obstacles.splice(idx, 0, x);
        } else {
            const sz = q[2];
            const prev = obstacles[idx - 1];
            const mx = Math.max(x - prev, query(prev));
            res.push(sz <= mx);
        }
    }

    return res;
};
