// Find longest string in sentence

function findLongestWordLength(str) {
  let strLen = 0
  let strArr = str.split(" ")
  for (let i of strArr) {
    console.log(i)
    if (i.length > strLen) {
      strLen = i.length
    }
  }

  return strLen;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");