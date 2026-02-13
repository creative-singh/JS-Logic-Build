// Question Link: https://leetcode.com/problems/longest-balanced-substring-ii
// 3714. Longest Balanced Substring II

var longestBalanced = function (s) {
    let n = s.length, ans = 0;

    // single a,b,c
    let i = 0
    while (i < n) {
        let j = i;
        while (j < n && s[j] == s[i]) {
            j++;
        }
        ans = Math.max(ans, j - i)
        i = j;
    }

    // ab,bc,ac
    function solve(c1, c2) {
        let maxLen = 0
        let diffMap = new Map();
        diffMap.set(0, -1);
        let diff = 0

        for (let i = 0; i < n; i++) {
            if (s[i] == c1) {
                diff++;
            } else if (s[i] == c2) {

                diff--;
            } else {
                diffMap = new Map();
                diffMap.set(0, i);
                diff = 0;
                continue;
            }

            if (diffMap.has(diff)) {
                maxLen = Math.max(maxLen, i - diffMap.get(diff))
            } else {
                diffMap.set(diff, i)
            }
        }
        return maxLen;
    }

    ans = Math.max(ans, solve('a', 'b'))
    ans = Math.max(ans, solve('a', 'c'))
    ans = Math.max(ans, solve('b', 'c'))

    const seen = new Map();
    seen.set("0,0", -1);

    let countA = 0, countB = 0, countC = 0;

    for (let i = 0; i < n; i++) {
        if (s[i] === 'a') countA++;
        else if (s[i] === 'b') countB++;
        else countC++;

        const key = `${countA - countB},${countA - countC}`;

        if (seen.has(key)) {
            ans = Math.max(ans, i - seen.get(key));
        } else {
            seen.set(key, i);
        }
    }


    return ans;
};
