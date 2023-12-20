// Question Link: https://leetcode.com/problems/buy-two-chocolates/

var buyChoco = function (prices, money) {
  small = Infinity;
  secSmall = Infinity;
  for (let i of prices) {
    if (i < small) {
      secSmall = small;
      small = i;
    } else if (i < secSmall) {
      secSmall = i;
    }
  }
  let leftOver = money - (small + secSmall);
  return leftOver >= 0 ? leftOver : money;
};
