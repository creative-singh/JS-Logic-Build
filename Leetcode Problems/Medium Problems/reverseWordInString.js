// Question Link: https://leetcode.com/problems/reverse-words-in-a-string/

// One Liner in JS
var reverseWords = function (s) {
  return s.trim().split(/\s+/).reverse().join(' ')
};

var reverseWords = function (s) {
  let words = []
  let word = ""
  for (let i of s) {
    if (i !== " ") {
      word += i
    } else if (word) {
      words.unshift(word)
      word = ""
    }
  }

  if (word) {
    words.unshift(word)
  }

  let str = ""
  let len = words.length
  for (let i = 0; i < len; i++) {
    str += words[i]
    if (len - 1 !== i) str += " "
  }
  return str
};
