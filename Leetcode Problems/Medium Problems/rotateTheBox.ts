// Question Link: https://leetcode.com/problems/rotating-the-box
// 1861. Rotating the Box

function rotateTheBox(box: string[][]): string[][] {
    const m = box.length, n = box[0].length;

    for (let r = 0; r < m; r++) {
        let blank = n - 1;

        for (let c = n - 1; c >= 0; c--) {

            if (box[r][c] === '*') {
                blank = c - 1;
            } else if (box[r][c] === '#') {
                // swap
                [box[r][c], box[r][blank]] = [box[r][blank], box[r][c]];

                blank--;
            }

        }
    }

    const ans = Array.from({ length: n }, () => Array(m));

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            ans[c][m - 1 - r] = box[r][c];
        }
    }

    return ans;
};
