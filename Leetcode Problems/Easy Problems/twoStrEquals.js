// Question Link: https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/

var arrayStringsAreEqual = function (word1, word2) {
  str1 = word1.join('')
  str2 = word2.join('')
  return str1 == str2
};