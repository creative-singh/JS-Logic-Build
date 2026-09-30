// Question Link: https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings
// 1111. Maximum Nesting Depth of Two Valid Parentheses Strings

function maxDepthAfterSplit(seq: string): number[] {
    let res = new Array(seq.length), depth = 0;

    for (let i = 0; i < seq.length; i++) {
        if (seq[i] === '(') {
            depth++;
            res[i] = depth % 2;
        } else {
            res[i] = depth % 2;
            depth--;
        }
    }
    return res;
};
