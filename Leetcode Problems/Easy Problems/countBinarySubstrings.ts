// Question Link: https://leetcode.com/problems/count-binary-substrings
// 696. Count Binary Substrings

function countBinarySubstrings(s: string): number {
    let res = 0, prev = 1, curr = 0;

    for(let i = 1; i < s.length; i++) {
        if(s[i] === s[i - 1]) {
            prev++;
        } else {
            res += Math.min(prev, curr);
            curr = prev;
            prev = 1;
        }
    }

    return res + Math.min(prev, curr);
};
