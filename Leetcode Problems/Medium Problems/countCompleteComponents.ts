// Question Link: https://leetcode.com/problems/count-the-number-of-complete-components
// 2685. Count the Number of Complete Components

function countCompleteComponents(n: number, edges: number[][]): number {
    let adj = Array.from({length: n}, () => []);
    for (const [a, b] of edges) {
        adj[a].push(b);
        adj[b].push(a);
    }

    let visited = new Array(n).fill(false), vertex = 0, edge = 0;

    const dfs = (x) => {
        vertex++;
        edge += adj[x].length;
        visited[x] = true;
        for (const next of adj[x]) {
            if (!visited[next]) dfs(next);
        }
    };

    let res = 0;
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            vertex = 0; edge = 0;
            dfs(i);
            if (edge === vertex * (vertex - 1)) res++;
        }
    }

    return res;
};
