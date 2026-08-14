// Question Link: https://leetcode.com/problems/maximum-length-substring-with-two-occurrences
// 3090. Maximum Length Substring With Two Occurrences

function maximumLengthSubstring(s: string): number {
    let res = 0, start = 0, map = new Map();

    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);

        // Shrink window if frequency exceeds 2
        while (map.get(s[i]) > 2) {
            map.set(s[start], map.get(s[start]) - 1);
            start++;
        }

        res = Math.max(res, i - start + 1);
    }

    return res;
};
