// Question Link: https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal

var makeEqual = function (words) {
  if (words.length == 1) return true;

  let wordsObj = {};
  for (let i of words) {
    for (let j = 0; j < i.length; j++) {
      if (wordsObj[i[j]]) {
        wordsObj[i[j]] = wordsObj[i[j]] + 1;
      } else {
        wordsObj[i[j]] = 1;
      }
    }
  }

  let wordsLength = words.length;
  for (let i in wordsObj) {
    if (wordsObj[i] % wordsLength != 0) return false;
  }
  return true;
};
