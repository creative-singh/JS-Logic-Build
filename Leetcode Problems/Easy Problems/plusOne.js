// Question Link: https://leetcode.com/problems/plus-one
var plusOne = function (digits) {
  let add = 0;
  let plusOne = 1;
  let ind = digits.length - 1;
  while (ind >= 0) {
    add = digits[ind] + plusOne + add;
    if (add < 10) {
      digits.splice(ind, 1, add);
      return digits;
    } else {
      digits.splice(ind, 1, add % 10);
      add = Math.floor(add / 10);
      plusOne = 0;
    }
    ind--;
  }
  if (add) digits = [add, ...digits];
  return digits;
};

var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] == 9) {
      digits[i] = 0;
    } else {
      digits[i] = digits[i] + 1;
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
};

console.log(plusOne([1, 2, 3])); // [1,2,4]
console.log(plusOne([4, 3, 2, 1])); // [4,3,2,2]
console.log(plusOne([9])); // [1,0]
console.log(plusOne([9, 9])); // [1,0,0]
