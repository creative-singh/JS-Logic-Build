// Question Link: https://leetcode.com/problems/remove-invalid-parentheses
// 301. Remove Invalid Parentheses

function removeInvalidParentheses(s: string): string[] {
    let res = [];
    remove(s, res, 0, 0, ['(', ')']);
    return res;
};

function remove(s, res, i, j, p) {
    let count = 0;

    for (let k = i; k < s.length; k++) {
        if (s[k] === p[0]) count++;
        if (s[k] === p[1]) count--;

        if (count < 0) {
            for (let x = j; x <= k; x++) {
                if (s[x] === p[1] && (x === j || s[x - 1] !== p[1])) {
                    remove(s.slice(0, x) + s.slice(x + 1), res, k, x, p);
                }
            }
            return;
        }
    }

    const rev = s.split('').reverse().join('');

    if (p[0] === '(') {
        remove(rev, res, 0, 0, [')', '(']);
    } else {
        res.push(rev);
    }
};
