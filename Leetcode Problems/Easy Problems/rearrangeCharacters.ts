// Question Link: https://leetcode.com/problems/rearrange-characters-to-make-target-string
// 2287. Rearrange Characters to Make Target String


function rearrangeCharacters(s: string, target: string): number {
    let sFreq = new Map(), targetFreq = new Map();

    for (const i of target) {
        sFreq.set(i, 0);
        targetFreq.set(i, (targetFreq.get(i) || 0) + 1);
    }

    for (const i of s) {
        if (sFreq.has(i)) {
            sFreq.set(i, sFreq.get(i) + 1);
        }
    }

    let res = 100;
    for (const [key, val] of sFreq) {
        res = Math.min(res, Math.floor(val / targetFreq.get(key)));
    }

    return res;
};
