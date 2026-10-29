// Question Link: https://leetcode.com/problems/palindromic-path-queries-in-a-tree
// 3841. Palindromic Path Queries in a Tree

function palindromePath(n: number, edges: number[][], s: string, queries: string[]): boolean[] {
    const g = Array.from({ length: n }, () => []);
    for (const [a, b] of edges) {
        g[a].push(b);
        g[b].push(a);
    }
    let LOG = 1;
    while ((1 << LOG) < n) LOG++;

    const up = [];
    for (let j = 0; j < LOG; j++) up.push(new Int32Array(n));

    const depth = new Int32Array(n), tin = new Int32Array(n), tout = new Int32Array(n);
    const it = new Int32Array(n), stack = [0];
    let timer = 1;
    tin[0] = 1;

    while (stack.length > 0) {
        const u = stack[stack.length - 1];
        if (it[u] < g[u].length) {
            const v = g[u][it[u]++];
            if (v === up[0][u]) continue;
            up[0][v] = u;
            depth[v] = depth[u] + 1;
            tin[v] = ++timer;
            stack.push(v);
        } else {
            tout[u] = timer;
            stack.pop();
        }
    }
    for (let j = 1; j < LOG; j++)
        for (let v = 0; v < n; v++) up[j][v] = up[j - 1][up[j - 1][v]];

    const bit = new Int32Array(n + 2);
    const add = (i, x) => {
        for (; i <= n + 1; i += i & -i) bit[i] ^= x;
    };
    const get = (i) => {
        let r = 0;
        for (; i > 0; i -= i & -i) r ^= bit[i];
        return r;
    };
    const lca = (a, b) => {
        let u = a, v = b;
        if (depth[u] < depth[v]) { const t = u; u = v; v = t; }
        const d = depth[u] - depth[v];
        for (let j = 0; j < LOG; j++) if ((d >> j) & 1) u = up[j][u];
        if (u === v) return u;
        for (let j = LOG - 1; j >= 0; j--) {
            if (up[j][u] !== up[j][v]) { u = up[j][u]; v = up[j][v]; }
        }
        return up[0][u];
    };

    const cs = new Int32Array(n);
    for (let u = 0; u < n; u++) {
        cs[u] = s.charCodeAt(u) - 97;
        const x = 1 << cs[u];
        add(tin[u], x);
        add(tout[u] + 1, x);
    }

    const res = [];
    for (const q of queries) {
        const p = q.split(" ");
        if (p[0] === "update") {
            const u = parseInt(p[1]);
            const c = p[2].charCodeAt(0) - 97;
            if (cs[u] !== c) {
                const x = (1 << cs[u]) ^ (1 << c);
                add(tin[u], x);
                add(tout[u] + 1, x);
                cs[u] = c;
            }
        } else {
            const u = parseInt(p[1]);
            const v = parseInt(p[2]);
            const l = lca(u, v);
            const m = get(tin[u]) ^ get(tin[v]) ^ (1 << cs[l]);
            res.push((m & (m - 1)) === 0);
        }
    }
    return res;
};
