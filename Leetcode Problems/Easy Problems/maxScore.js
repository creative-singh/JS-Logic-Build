// Question Link: https://leetcode.com/problems/maximum-score-after-splitting-a-string

// 1st Approach
var maxScore = function (s) {
  let len = s.length;
  let max = 0;
  let countZero = 0;
  let countOne = count(s, 0, len, 1);
  for (let i = 0; i < len - 1; i++) {
    if (s[i] == 0) countZero++;
    let cntOne = count(s, 0, i + 1, 1);

    max = Math.max(max, countZero + (countOne - cntOne));
  }
  return max;
};

function count(str, from, to, toBeCnt) {
  let cnt = 0;
  for (let i = from; i < to; i++) {
    if (str[i] == toBeCnt) cnt += 1;
  }
  return cnt;
}

// Best Approach
var maxScore = function (s) {
  let len = s.length;
  let max = -Infinity;
  let leftZero = 0;
  let leftOne = 0;

  for (let i = 0; i < len - 1; i++) {
    s[i] == 0 ? leftZero++ : leftOne++;
    let temp = leftZero - leftOne;
    max = Math.max(max, temp);
  }
  if (s[len - 1] == 1) leftOne++;
  return max + leftOne;
};
