// Question Link: https://leetcode.com/problems/find-the-k-th-character-in-string-game-ii
// 3307. Find the K-th Character in String Game II

var kthCharacter = function(k, operations) {
    if(k === 1)
        return "a";
    
    let N = operations.length
    let charLen = 1
    let newK = -1;
    let operationType = -1;

    for(let i = 0; i < N; i++) {
        charLen *= 2

        if(charLen >= k) {
            operationType = operations[i]
            newK = k - charLen / 2
            break;
        }
    }

    let char = kthCharacter(newK, operations)
    
    if(operationType == 0)
        return char
    
    
    let charCode = char.charCodeAt()
    return charCode == 122 ? 'a' : String.fromCharCode(charCode + 1)
};