// Question Link: https://leetcode.com/problems/find-the-k-th-character-in-string-game-i
// 3304. Find the K-th Character in String Game I

var kthCharacter = function(k) {
    let word = "a"
    let N; let nxtCode; let nxtLetter;
    
    while(word.length < k) {
        N = word.length
        for(let i = 0; i < N; i++) {
            if(word.length === k) {
                return word[word.length - 1]
            }
            nxtCode = word[i].charCodeAt() + 1
            
            if(nxtCode > 122)
                nxtCode = 97
            
            nxtLetter = String.fromCharCode(nxtCode)
            word += nxtLetter
        }
    }
    return word[word.length - 1]

};