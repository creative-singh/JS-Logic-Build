// Question Link: https://leetcode.com/problems/jewels-and-stones
// 771. Jewels and Stones

var numJewelsInStones = function (jewels, stones) {
  let count = 0;
  for (let i of stones) {
    if (jewels.split("").includes(i)) {
      count++;
    }
  }

  return count;
};