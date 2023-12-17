// Question Link: https://leetcode.com/problems/minimum-add-to-make-parentheses-valid

var minAddToMakeValid = function (s) {
  let stack = [];
  let count = 0;
  for (let i of s) {
    if (i == "(") {
      stack.push(i);
    } else if (i == ")" && stack.length) {
      stack.pop();
    } else {
      count++;
    }
  }
  return count + stack.length;
};

// we can use openCnt = 0 also, and can save push pop operation
