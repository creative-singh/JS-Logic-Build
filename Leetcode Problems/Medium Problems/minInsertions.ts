// Question Link: https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string
// 1541. Minimum Insertions to Balance a Parentheses String

function minInsertions(s: string): number {
    let open = 0, res = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') open++;
        else {
            if (i + 1 < s.length && s[i + 1] === ')') i++;
            else res++;

            if (open > 0) open--;
            else res++;
        }
    }

    return res + open * 2;
};
