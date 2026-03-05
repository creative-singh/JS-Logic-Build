// Question Link: https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string
// 1758. Minimum Changes To Make Alternating Binary String

function minOperations(s: string): number {
    const n = s.length;

    let str = "01";
    for(let i = 2; i < n; i=i+2) {
        str += "01"
    }

    let temp1 = 0, temp2 = 0;

    for(let i = 0; i < n; i++) {
        if(s[i] === str[i]) {
            temp1++
        } else {
            temp2++
        }
    }
    return Math.min(temp1, temp2)
};
