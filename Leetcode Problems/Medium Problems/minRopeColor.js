// Question Link: https://leetcode.com/problems/minimum-time-to-make-rope-colorful/

var minCost = function (colors, neededTime) {
  const n = colors.length;
  let time = 0;
  let prevMax = 0;

  for (let i = 0; i < n; i++) {
    if (i > 0 && colors[i] != colors[i - 1]) {
      prevMax = 0;
    }

    let curr = neededTime[i];
    time += Math.min(prevMax, curr);
    prevMax = Math.max(prevMax, curr);
  }

  return time;
};
