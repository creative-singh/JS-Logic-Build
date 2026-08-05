// Question Link: https://leetcode.com/problems/remove-methods-from-project
// 3310. Remove Methods From Project

function remainingMethods(n: number, k: number, invocations: number[][]): number[] {
    const adj = Array.from({ length: n }, () => []);

    for (const [u, v] of invocations) {
        adj[u].push(v);
    }

    const suspicious = Array(n).fill(false);
    suspicious[k] = true;

    let queue = [k], head = 0;

    while (head < queue.length) {
        const u = queue[head++];

        for (const v of adj[u]) {
            if (!suspicious[v]) {
                suspicious[v] = true;
                queue.push(v);
            }
        }
    }

    for (const [u, v] of invocations) {
        if (!suspicious[u] && suspicious[v]) {
            return Array.from(
                { length: n },
                (_, i) => i
            );
        }
    }

    const res = [];

    for (let i = 0; i < n; i++) {
        if (!suspicious[i]) {
            res.push(i);
        }
    }

    return res;
};
