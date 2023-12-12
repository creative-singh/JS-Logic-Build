// Question Link: https://leetcode.com/problems/happy-number/

var isHappy = function (n) {
  let cnt = n;
  let loop = 100;
  while (cnt > 1 && loop >= 1) {
    let i = 0;
    while (cnt >= 1) {
      let val = cnt % 10;
      i += val * val;
      cnt = Math.floor(cnt / 10);
    }
    cnt = i;
    loop--;
  }
  return cnt == 1;
};

console.log(isHappy(19)); // true
console.log(isHappy(2)); // false
