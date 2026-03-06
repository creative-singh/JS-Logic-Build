// Question Link: https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones
// 1784. Check if Binary String Has at Most One Segment of Ones

function checkOnesSegment(s: string): boolean {
    let segment = 0, currSegment = 1;
    for(let i = 1; i < s.length; i++) {
        if(s[i] === "0") {
            segment += currSegment;
            currSegment = 0;
        } else {
            currSegment = 1
        }
    }
    return (currSegment + segment) === 1
};
