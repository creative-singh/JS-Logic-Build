// Question Link: https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i
// 3014. Minimum Number of Pushes to Type Word I

function minimumPushes(word: string): number {
    let n = word.length;
    if(n < 9) return n

    let cost = 1, res = 0;

    while(n > 0) {
        res += Math.min(n, 8) * cost;
        cost++;
        n -= 8
    }
    return res;
};
