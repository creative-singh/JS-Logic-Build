// Question Link: https://leetcode.com/problems/plus-one

var plusOne = function (digits) {
  let add = 0;
  let plusOne = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    add = digits[i] + plusOne + add;
    if (add < 10) {
      digits.splice(i, 1, add);
      return digits;
    } else {
      digits.splice(i, 1, add % 10);
      add = Math.floor(add / 10);
      plusOne = 0;
    }
  }
  if (add) digits.unshift(add);
  return digits;
};
