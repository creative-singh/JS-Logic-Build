// Question Link: https://leetcode.com/problems/jump-game-iii/
// 1306. Jump Game III

function canReach(arr: number[], start: number): boolean {
    const n = arr.length;
    let visited = new Array(n).fill(false);

    function dfs(i) {
        if(i < 0 || i >= n || visited[i]) return false;
        if(arr[i] === 0) return true;
        visited[i] = true
        return dfs(i + arr[i]) || dfs(i - arr[i])
    }

    return dfs(start)
};
