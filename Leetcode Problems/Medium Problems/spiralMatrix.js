// Question Link: https://leetcode.com/problems/spiral-matrix

var spiralOrder = function (matrix) {
  let row = matrix.length;
  let col = matrix[0].length;
  let dir = 0;

  let top = 0;
  let down = row - 1;
  let left = 0;
  let right = col - 1;

  /*
    dir = 0 : go left to right
    dir = 1 : go top to down
    dir = 2 : go right to left
    dir = 3 : go down to top
  */
  let spiral = [];

  while (top <= down && left <= right) {
    if (dir == 0) {
      // left to right
      // constant: row (top)
      for (let i = left; i <= right; i++) {
        spiral.push(matrix[top][i]);
      }
      top++;
    }

    if (dir == 1) {
      // top to down
      // constant: column (right)
      for (let i = top; i <= down; i++) {
        spiral.push(matrix[i][right]);
      }
      right--;
    }

    if (dir == 2) {
      // right to left
      // constant: row (down)
      for (let i = right; i >= left; i--) {
        spiral.push(matrix[down][i]);
      }
      down--;
    }

    if (dir == 3) {
      // down to top
      // constant: column (left)
      for (let i = down; i >= top; i--) {
        spiral.push(matrix[i][left]);
      }
      left++;
    }

    dir++;
    if (dir == 4) {
      dir = 0;
    }
  }

  return spiral;
};
