// Question Link: https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column

var onesMinusZeros = function (grid) {
  let m = grid.length;
  let n = grid[0].length;

  let rowVal = new Array(m).fill(0);
  let colVal = new Array(n).fill(0);

  // Calculate how many 1's in row and coloumn
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] == 1) {
        rowVal[r]++;
        colVal[c]++;
      }
    }
  }

  // Make 2-D Array
  let diff = new Array(m);
  for (let i = 0; i < m; i++) {
    diff[i] = new Array(n);
  }

  // Calculate and put values to diff
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      diff[row][col] =
        rowVal[row] +
        colVal[col] -
        (m - rowVal[row]) -
        (n - colVal[col]);
    }
  }

  return diff;
};

console.log(
  onesMinusZeros([
    [0, 1, 1],
    [1, 0, 1],
    [0, 0, 1],
  ])
);
// [[0,0,4],[0,0,4],[-2,-2,2]]

console.log(
  onesMinusZeros([
    [1, 1, 1],
    [1, 1, 1],
  ])
);
// [[5,5,5],[5,5,5]]
