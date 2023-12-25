// Question Link: https://leetcode.com/problems/transpose-matrix/

var transpose = function (matrix) {
  let len = matrix.length;
  let inner = matrix[0].length;
  let newMatrix = [];

  for (let i = 0; i < inner; i++) {
    let temp = [];
    for (let j = 0; j < len; j++) {
      temp.push(matrix[j][i]);
    }
    newMatrix.push(temp);
  }
  return newMatrix;
};
