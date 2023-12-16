// Question Link: https://leetcode.com/problems/valid-anagram
var isAnagram = function (s, t) {
  for (let i of s) {
    if (t.includes(i)) {
      t = t.replace(i, "");
    } else {
      return false;
    }
  }
  if (t.length) return false;
  return true;
};

// 2nd Approach

var isAnagram = function (s, t) {
  if (s.length != t.length) return false;
  let sDict = makeDict(s);
  let tDict = makeDict(t);

  for (let i in sDict) {
    if (tDict[i] != sDict[i]) return false;
  }
  return true;
};

function makeDict(str) {
  let dict = {};
  for (let i of str) {
    if (dict[i]) {
      dict[i] = dict[i] + 1;
    } else {
      dict[i] = 1;
    }
  }
  return dict;
}
