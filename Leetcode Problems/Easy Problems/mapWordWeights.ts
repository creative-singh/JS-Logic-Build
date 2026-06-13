// Question Link: https://leetcode.com/problems/weighted-word-mapping
// 3838. Weighted Word Mapping

var mapWordWeights = function(words, weights) {
    let res = ""; const totalLetters = 26;

    for(let word of words) {
        let total = 0;
        for(let j of word) {
            total += weights[j.charCodeAt() - 97]
        }
        const modulo = total % totalLetters;
        res += String.fromCharCode((totalLetters - modulo) + 96);
    }
    return res;
};
