// Question Link: https://leetcode.com/problems/rotate-image

var rotate = function (matrix) {
  let row = matrix.length - 1;
  let col = matrix[0].length - 1;
  let newMat = [];

  for (let c = 0; c <= col; c++) {
    let tempMat = [];
    for (let r = row; r >= 0; r--) {
      tempMat.push(matrix[r][c]);
    }
    newMat.push(tempMat);
  }

  for (let i = 0; i <= row; i++) {
    for (let j = 0; j <= col; j++) {
      matrix[i][j] = newMat[i][j];
    }
  }
};
