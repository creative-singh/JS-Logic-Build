// Question Link: https://leetcode.com/problems/maximum-number-of-non-overlapping-substrings
// 1520. Maximum Number of Non-Overlapping Substrings

function maxNumOfSubstrings(s: string): string[] {
    const n = s.length;
    let first = new Array(26).fill(n), last = new Array(26).fill(-1);

    for (let i = 0; i < n; i++) {
        const ch = s.charCodeAt(i) - 97;
        if (first[ch] === n)
            first[ch] = i;
        last[ch] = i;
    }

    let intervals = [];
    
    for (let ch = 0; ch < 26; ch++) {
        if (last[ch] === -1) continue;

        let start = first[ch], end = last[ch], valid = true;

        for (let i = start; i <= end; i++) {
            const current = s.charCodeAt(i) - 97;

            if (first[current] < start) {
                valid = false;
                break;
            }
            end = Math.max(end, last[current]);
        }

        if (valid)
            intervals.push([start, end]);
    }

    intervals.sort((a, b) => {
        if (a[1] !== b[1])
            return a[1] - b[1];

        return (a[1] - a[0]) - (b[1] - b[0]);
    });

    let res = [], previousEnd = -1;

    for (const [start, end] of intervals) {
        if (start > previousEnd) {
            res.push(s.substring(start, end + 1));
            previousEnd = end;
        }
    }

    return res;
};
