// Question Link: https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities
// 2492. Minimum Score of a Path Between Two Cities

function minScore(n: number, roads: number[][]): number {
    let g = Array.from({ length: n + 1 }, () => []);

    for (const [u, v, w] of roads) {
        g[u].push([v, w]);
        g[v].push([u, w]);
    }

    const vis = new Array(n + 1).fill(false), q = [1];
    vis[1] = true;

    let res = Infinity;

    for (let i = 0; i < q.length; i++) {
        const u = q[i];

        for (const [v, w] of g[u]) {
            res = Math.min(res, w);

            if (!vis[v]) {
                vis[v] = true;
                q.push(v);
            }
        }
    }

    return res;
};
