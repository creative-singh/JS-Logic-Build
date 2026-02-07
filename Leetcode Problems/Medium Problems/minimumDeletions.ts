// Question Link: https://leetcode.com/problems/minimum-deletions-to-make-string-balanced
// 1653. Minimum Deletions to Make String Balanced

var minimumDeletions = function(s) {
    let cnt = 0, res = 0;

    for(let i = 0; i < s.length; i++) {
        if(s.charCodeAt(i) === 98) {
            cnt++
        } else {
            if(res + 1 < cnt) {
                res++
            } else {
                res = cnt
            }
        }
    }
    return res
};
