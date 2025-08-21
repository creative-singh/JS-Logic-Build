// Question Link: https://leetcode.com/problems/count-submatrices-with-all-ones
// 1504. Count Submatrices With All Ones

var numSubmat = function(mat) {
    const m = mat.length, n = mat[0].length;
    let heights = Array(n).fill(0), ans = 0;

    for(let r = 0; r < m; r++) {
        for(let c = 0; c < n; c++) {
            heights[c] = mat[r][c] ? heights[c] + 1 : 0
        }

        let st = [[-1, 0, -1]];
        for(let c = 0; c < n; c++) {
            const h = heights[c];
            while(st[st.length - 1][2] >= h) {
                st.pop();
            }
            const [i, j] = st[st.length - 1];
            const cur = j + (c - i) * h 
            st.push([c, cur, h]);
            ans += cur
        }
    }

    return ans
};
