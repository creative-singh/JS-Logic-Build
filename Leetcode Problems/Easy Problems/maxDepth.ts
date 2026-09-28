// Question Link: https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses
// 1614. Maximum Nesting Depth of the Parentheses

function maxDepth(s: string): number {
    let depth = 0, r = 0;

    for (const c of s) {
        if (c === ')') {
            depth--;
            continue;
        }

        if (c !== '(') continue;
        depth++;
        if (depth > r) r = depth;
    }
    return r;
};
