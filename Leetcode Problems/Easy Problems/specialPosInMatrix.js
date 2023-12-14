// Quesion Link: https://leetcode.com/problems/special-positions-in-a-binary-matrix

var numSpecial = function (mat) {
  let res = 0;
  let m = mat.length;
  let n = mat[0].length;
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      // If 0 then no need to check further
      if (mat[row][col] == 0) continue;

      let isSpecial = true;
      // If here, means its 1
      // Now col do not need to be 1
      for (let r = 0; r < m; r++) {
        if (r != row && mat[r][col] == 1) {
          isSpecial = false;
          break;
        }
      }

      // and row do not need to be 1
      for (let c = 0; c < n; c++) {
        if (c != col && mat[row][c] == 1) {
          isSpecial = false;
          break;
        }
      }

      // and then we increment res
      if (isSpecial) res++;
    }
  }
  return res;
};

// Better Approach

var numSpecial = function (mat) {
  let m = mat.length;
  let n = mat[0].length;
  let rowCount = new Array(m).fill(0); // how many 1s in row
  let colCount = new Array(m).fill(0); // how many 1s in column

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (mat[row][col] == 1) {
        rowCount[row]++;
        colCount[col]++;
      }
    }
  }

  let res = 0;
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (mat[row][col] == 0) continue;

      if (rowCount[row] == 1 && colCount[col] == 1) {
        res++;
      }
    }
  }

  return res;
};

console.log(
  numSpecial([
    [1, 0, 0],
    [0, 0, 1],
    [1, 0, 0],
  ])
); // 1

console.log(
  numSpecial([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])
); // 3
