// Question Link: https://leetcode.com/problems/lexicographically-smallest-permutation-greater-than-target
// 3720. Lexicographically Smallest Permutation Greater Than Target

function lexGreaterPermutation(s: string, target: string): string {
    const n = s.length;
    let cnt = new Array(26).fill(0), p = 0;

    for (const ch of s) {
        cnt[ch.charCodeAt(0) - 97]++;
    }

    while (p < n) {
        const c = target.charCodeAt(p) - 97;
        if (cnt[c] === 0) {
            break;
        }
        cnt[c]--;
        p++;
    }

    let i = p;
    while (i >= 0) {
        if (i < n) {
            const t = target.charCodeAt(i) - 97;
            let pick = -1;

            for (let c = t + 1; c < 26; c++) {
                if (cnt[c] > 0) {
                    pick = c;
                    break;
                }
            }
            if (pick >= 0) {
                cnt[pick]--;

                let tail = "";
                for (let c = 0; c < 26; c++) {
                    tail += String.fromCharCode(97 + c).repeat(cnt[c]);
                }

                cnt[pick]++;
                return target.slice(0, i)
                    + String.fromCharCode(97 + pick)
                    + tail;
            }
        }
        i--;
        if (i >= 0) {
            cnt[target.charCodeAt(i) - 97]++;
        }
    }
    return "";
};
