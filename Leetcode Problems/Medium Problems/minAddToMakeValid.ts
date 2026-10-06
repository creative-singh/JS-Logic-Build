// Question Link: https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/
// 921. Minimum Add to Make Parentheses Valid

function minAddToMakeValid(s: string): number {
    let openCnt = 0, cnt = 0;

    for (let i of s) {
        if (i == "(") {
            openCnt++;
        } else if (i == ")" && openCnt) {
            openCnt--;
        } else {
            cnt++;
        }
    }
    return cnt + openCnt;
};
