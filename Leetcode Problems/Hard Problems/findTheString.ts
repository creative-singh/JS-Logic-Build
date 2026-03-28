// Question Link: https://leetcode.com/problems/find-the-string-with-lcp
// 2573. Find the String with LCP

var findTheString = function(lcp) {
    const n = lcp.length;
    let s = new Array(n).fill(null);
    let charCode = 97;

    for(let i = 0; i < n; i++) {
        if(s[i] === null) {
            if(charCode > 122) return ""; // z
            let char = String.fromCharCode(charCode);
            for(let j = i; j < n; j++) {
                if(lcp[i][j] > 0)
                    s[j] = char;
            }
            charCode++;
        }
    }

    const res = s.join('');

    for(let i = n - 1; i >= 0; i--) {
        for(let j = n - 1; j >= 0; j--) {
            let expected = (res[i] === res[j]) 
                ? (i + 1 < n && j + 1 < n ? lcp[i + 1][j + 1] + 1 : 1)
                : 0;

            if(lcp[i][j] !== expected) return ""
        }
    }

    return res;
};
