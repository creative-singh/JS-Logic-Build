// Question Link: https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k
// 1461. Check If a String Contains All Binary Codes of Size K

function hasAllCodes(s: string, k: number): boolean {
    let set = new Set();
    const loopLen = s.length - k + 1;

    for(let i = 0; i < loopLen; i++) {
        set.add(s.substr(i, k))
    }
    return set.size >= Math.pow(2, k)
};
