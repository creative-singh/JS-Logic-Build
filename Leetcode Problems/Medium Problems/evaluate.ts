// Question Link: https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string
// 1807. Evaluate the Bracket Pairs of a String

function evaluate(s: string, knowledge: string[][]): string {
    let map = new Map();
    for (let list of knowledge) {
        map.set(list[0], list[1]);
    };

    let key = "", res = "", flag = false;
    for (let ch of s) {
        if (ch === '(') {
            flag = true;
        } else if (ch === ')') {
            if (map.has(key)) {
                res += map.get(key);
            } else {
                res += "?";
            }
            flag = false;
            key = "";
        } else if (flag) {
            key += ch;
        } else {
            res += ch;
        }
    }
    return res;
};
