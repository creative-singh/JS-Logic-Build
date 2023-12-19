// Question Link: https://leetcode.com/problems/image-smoother

var imageSmoother = function (M) {
  const rows = M.length;
  const cols = M[0].length;

  const result = [];

  for (let i = 0; i < rows; i++) {
    result[i] = [];
    for (let j = 0; j < cols; j++) {
      result[i][j] = smoothPixel(M, i, j, rows, cols);
    }
  }

  return result;
};

// Helper function to calculate the smoothed value for a pixel
function smoothPixel(M, i, j, rows, cols) {
  let sum = 0;
  let count = 0;

  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      const ni = i + x;
      const nj = j + y;

      if (isValid(ni, nj, rows, cols)) {
        sum += M[ni][nj];
        count++;
      }
    }
  }

  return Math.floor(sum / count);
}

// Helper function to check if the given indices are valid
function isValid(i, j, rows, cols) {
  return i >= 0 && i < rows && j >= 0 && j < cols;
}
