// Question Link: https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points

var maxWidthOfVerticalArea = function (points) {
  let len = points.length;
  points.sort((a, b) => a[0] - b[0]);

  let max = 0;
  for (let i = 1; i < len; i++) {
    let tmp = points[i][0] - points[i - 1][0];
    if (max < tmp) max = tmp;
  }
  return max;
};
