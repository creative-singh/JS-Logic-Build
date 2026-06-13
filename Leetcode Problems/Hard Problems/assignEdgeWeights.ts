// Question Link: https://leetcode.com/problems/number-of-ways-to-assign-edge-weights-ii
// 3559. Number of Ways to Assign Edge Weights II

function assignEdgeWeights(edges: number[][], queries: number[][]): number[] {
    const MOD = 1000000007n, n = edges.length + 1;
    const LOG = Math.ceil(Math.log2(n + 1)) + 1;
    
    // Build adjacency list
    let adj = Array.from({length: n + 1}, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }
    
    // BFS to get depth and parent
    const depth = new Int32Array(n + 1).fill(-1);
    let parent = Array.from({length: LOG}, () => new Int32Array(n + 1));
    
    depth[1] = 0;
    parent[0][1] = 1;
    let queue = [1];
    for (let qi = 0; qi < queue.length; qi++) {
        const u = queue[qi];
        for (const v of adj[u]) {
            if (depth[v] === -1) {
                depth[v] = depth[u] + 1;
                parent[0][v] = u;
                queue.push(v);
            }
        }
    }
    
    // Build sparse table for LCA
    for (let j = 1; j < LOG; j++)
        for (let v = 1; v <= n; v++)
            parent[j][v] = parent[j-1][parent[j-1][v]];
    
    const lca = (u, v) => {
        if (depth[u] < depth[v]) [u, v] = [v, u];
        let diff = depth[u] - depth[v];
        for (let j = 0; j < LOG; j++)
            if ((diff >> j) & 1) u = parent[j][u];
        if (u === v) return u;
        for (let j = LOG - 1; j >= 0; j--)
            if (parent[j][u] !== parent[j][v]) {
                u = parent[j][u];
                v = parent[j][v];
            }
        return parent[0][u];
    };
    
    // Precompute powers of 2
    const pow2 = new Array(n + 1).fill(0n);
    pow2[0] = 1n;
    for (let i = 1; i <= n; i++) pow2[i] = pow2[i-1] * 2n % MOD;
    
    return queries.map(([u, v]) => {
        const l = lca(u, v);
        const k = depth[u] + depth[v] - 2 * depth[l]; // path length
        if (k === 0) return 0;
        return Number(pow2[k - 1]);
    });
};
