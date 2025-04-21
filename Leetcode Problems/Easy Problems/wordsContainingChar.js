// Question Link: https://leetcode.com/problems/find-words-containing-character

var findWordsContaining = function(words, x) {
    let op = []
    for(let i = 0; i < words.length; i++) {
        if(words[i].includes(x)) {
            op.push(i)
        }
    }
    return op
};