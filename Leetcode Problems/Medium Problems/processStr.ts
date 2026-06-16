// Question Link: https://leetcode.com/problems/process-string-with-special-operations-i
// 3612. Process String with Special Operations I

function processStr(s: string): string {
    let res = [];

    for(let i of s) {
        switch(i) {
            case "*": // remove last char from res
                res.pop()
                break;
            case "#": // duplicate current result
                res = [...res, ...res]
                break;
            case "%": // reverse the res
                res.reverse()
                break;
            default:
                res.push(i)   
        }
    }
    return res.join("")
};
