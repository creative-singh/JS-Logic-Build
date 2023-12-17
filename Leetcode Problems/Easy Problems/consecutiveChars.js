// Question Link: https://leetcode.com/problems/consecutive-characters

var maxPower = function (s) {
  let cnt = 1;
  let maxCnt = 1;
  let alpha = s[0];
  for (let i = 1; i < s.length; i++) {
    if (alpha == s[i]) {
      cnt++;
    } else {
      cnt = 1;
      if (cnt > maxCnt) maxCnt = cnt;
      alpha = s[i];
    }
  }
  return cnt > maxCnt ? cnt : maxCnt;
};
