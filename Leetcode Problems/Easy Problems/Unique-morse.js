// Question Link: https://leetcode.com/problems/unique-morse-code-words/

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  let cryptWordSet = new Set();
  let pattern = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
  let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  for (let word of words) {
    let cryptWord = ""
    for (let alphabet of word) {
      cryptWord += pattern[alpha.indexOf(alphabet)]
    }
    cryptWordSet.add(cryptWord);
  }
  return Array.from(cryptWordSet).length
};