// Question Link: https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty

var minOperations = function (nums) {
  let obj = {};
  for (let i of nums) {
    if (obj[i]) {
      obj[i]++;
    } else {
      obj[i] = 1;
    }
  }

  let res = 0;
  for (let i in obj) {
    while (
      (obj[i] >= 3 && obj[i] !== 4) ||
      (obj[i] % 2 === 0 && obj[i])
    ) {
      if (obj[i] >= 3 && obj[i] !== 4) {
        obj[i] -= 3;
      } else if (obj[i] % 2 === 0) {
        obj[i] -= 2;
      }
      res++;
    }
    if (obj[i] === 1) return -1;
  }
  return res;
};
