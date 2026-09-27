// Question Link: https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parenthesesa
// 1190. Reverse Substrings Between Each Pair of Parentheses

function reverseParentheses(s: string): string {
    let stack = [], curr = "";

    for (let ch of s) {
        if (ch === '(') {
            stack.push(curr);
            curr = "";
        } else if (ch === ')') {
            curr = curr.split("").reverse().join("");

            let previous = stack.pop();
            curr = previous + curr;
        } else {
            curr += ch;
        }
    }

    return curr;
};
