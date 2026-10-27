// Question Link: https://leetcode.com/problems/create-grid-with-exactly-one-path/
// 3963. Create Grid With Exactly One Path

function createGrid(m: number, n: number): string[] {
    const res = ['.'.repeat(n)];
    const rest = '#'.repeat(n - 1) + '.';
    for (let i = 1; i < m; i++) {
        res.push(rest);
    }
    return res;
};
