// Question Link: https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid
// 1536. Minimum Swaps to Arrange a Binary Grid

function minSwaps(grid: number[][]): number {
    let n = grid.length, zeroes = [];

    for(let i = 0; i < n; i++) {
        let cnt = 0, j = n - 1;
        while(grid[i][j] === 0) {
            cnt++; j--;
        }

        zeroes.push(cnt)
    }
    let ans = 0;

    for(let i = 0; i < n; i++) {
        let j = i;
        const req = n - i - 1;

        while(j < n && zeroes[j] < req) {
            j++;
        }

        if(j === n) {
            return -1;
        }

        while(j > i) {
            [zeroes[j], zeroes[j - 1]] = [zeroes[j - 1], zeroes[j]];
            j--;
            ans++;
        }
    }
    return ans;
};
