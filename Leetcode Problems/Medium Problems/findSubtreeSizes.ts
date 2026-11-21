// Question Link: https://leetcode.com/problems/find-subtree-sizes-after-changes
// 3331. Find Subtree Sizes After Changes

function findSubtreeSizes(parent: number[], s: string): number[] {
    const n = parent.length,
        adj = Array.from({length: n}, () => []),
        tree = Array.from({length: n}, () => []),
        ans = Array(n).fill(0),
        last = Array(26).fill(-1);

    for (let i = 1; i < n; i++)
        adj[parent[i]].push(i);

    function dfs(u) {
        const c = s.charCodeAt(u) - 97, old = last[c];

        if (u && old !== -1) parent[u] = old;
        last[c] = u;

        for (const v of adj[u])
            dfs(v);

        last[c] = old;
    }

    function calc(u) {
        ans[u] = 1;
        for (const v of tree[u])
            ans[u] += calc(v);
        return ans[u];
    }

    dfs(0);

    for (let i = 1; i < n; i++)
        tree[parent[i]].push(i);

    calc(0);
    return ans;
};
