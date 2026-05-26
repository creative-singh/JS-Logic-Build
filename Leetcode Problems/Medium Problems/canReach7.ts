// Question Link: https://leetcode.com/problems/jump-game-vii/
// 1871. Jump Game VII

function canReach(s: string, minJump: number, maxJump: number): boolean {
    const n = s.length;

    let queue = [0], visited = new Array(n).fill(false), front = 0, far = 0;
    visited[0] = true;

    while (front < queue.length) {
        const i = queue[front++];
        if (i === n - 1) {
            return true;
        }

        const start = Math.max(i + minJump, far + 1);
        const end = Math.min(i + maxJump, n - 1);

        for (let j = start; j <= end; j++) {
            if (s[j] === '0' && !visited[j]) {
                visited[j] = true;
                queue.push(j);
            }
        }

        far = Math.max(far, end);
    }

    return false;
};
