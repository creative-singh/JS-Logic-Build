// Question Link: https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii
// 3016. Minimum Number of Pushes to Type Word II

function minimumPushes(word: string): number {
    let freq = new Array(26).fill(0);

    for (const ch of word)
        freq[ch.charCodeAt(0) - 97]++;

    freq.sort((a, b) => a - b);

    let cnt = 0, res = 0;

    for (let i = 25; i >= 0; i--) {
        if (freq[i] > 0)
            cnt++;

        if (cnt <= 8)
            res += freq[i];
        else if (cnt <= 16)
            res += freq[i] * 2;
        else if (cnt <= 24)
            res += freq[i] * 3;
        else
            res += freq[i] * 4;
    }

    return res;
};
