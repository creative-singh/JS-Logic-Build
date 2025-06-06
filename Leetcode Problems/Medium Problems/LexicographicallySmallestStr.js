// Question Link: https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string
// Leetcode 2434. Using a Robot to Print the Lexicographically Smallest String

var robotWithString = function(s) {
    let len = s.length

    // pre-process
    let minCharToRight = []
    for(let i = len-1; i >= 0; i--) {
        let currMin = minCharToRight[i+1] || "z"
        let min 
        if(s[i] < currMin) {
            min = s[i]
        } else {
            min = currMin
        }
        minCharToRight[i] = min
    }
    
    let t = []; let p = ""
    for(let i = 0; i < len; i++) {
        // first operation
        t.push(s[i])

        // second operation // i + 1 < len : cheking out of bound condition
        let minChar = i + 1 < len ? minCharToRight[i+1] : s[i]
        while(t?.[t.length-1] <= minChar) {
            let char = t.pop()
            p += char
        } 
    }
    // if T remaining, pop and push to p
    while(t.length) {
        let char = t.pop()
        p += char
    }

    return p
};