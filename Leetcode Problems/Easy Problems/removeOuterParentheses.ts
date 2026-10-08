// Question Link: https://leetcode.com/problems/remove-outermost-parentheses
// 1021. Remove Outermost Parentheses

function removeOuterParentheses(s: string): string {
    let res = "", count = 0;

    for (const c of s) {
        if (c === '(') {
            if (count > 0) res += c;
            count++;
        } else {
            count--;
            if (count > 0) res += c;
        }
    }
    return res;
};
