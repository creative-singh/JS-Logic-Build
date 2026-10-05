// Question Link: https://leetcode.com/problems/score-of-parentheses
// 856. Score of Parentheses

function scoreOfParentheses(s: string): number {
    let score = 0, depth = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            depth++;
        } else {
            depth--;
            if (s[i - 1] === '(') {
                score += Math.pow(2, depth);
            }
        }
    }
    return score;
};
