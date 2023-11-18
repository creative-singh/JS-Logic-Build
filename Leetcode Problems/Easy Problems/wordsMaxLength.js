// Question Link : https://leetcode.com/problems/maximum-number-of-words-found-in-sentences

/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  let count = 0;
  for (let i of sentences) {
    let temp = i.split(" ").length;
    if (temp > count) count = temp
  }
  return count;
};