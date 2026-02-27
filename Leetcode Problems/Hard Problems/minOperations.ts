// Question Link: https://leetcode.com/problems/minimum-operations-to-equalize-binary-string
// 3666. Minimum Operations to Equalize Binary String

var minOperations = function(s, k) {
    const n = s.length;
    let zero = 0;
    for(const ch of s) 
        if (ch === '0') 
            zero++;

    if (n === k) {
        if (zero === 0) 
            return 0;
        if (zero === n) 
            return 1;
        return -1;
    }

    const ceilDiv = (x, y) => Math.floor((x + y - 1) / y);
    const INF = 1e18;
    let res = INF;

    if (zero % 2 === 0) {
        let m = Math.max(ceilDiv(zero, k), ceilDiv(zero, n - k));
        if (m % 2 === 1) 
            m++;
        res = Math.min(res, m);
    }

    if (zero % 2 === (k % 2)) {
        let m = Math.max(ceilDiv(zero, k), ceilDiv(n - zero, n - k));
        if (m % 2 === 0) 
            m++;
        res = Math.min(res, m);
    }

    return res < INF ? res : -1;
};
