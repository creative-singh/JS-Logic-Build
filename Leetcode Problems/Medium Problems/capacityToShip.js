// Question Link: https://leetcode.com/problems/capacity-to-ship-packages-within-d-days

var shipWithinDays = function (weights, days) {
  let maxValue = Math.max(...weights);
  let allWeights = weights.reduce((a, b) => a + b, 0);

  let ans = 0;
  while (maxValue <= allWeights) {
    let mid = Math.floor((maxValue + allWeights) / 2);

    let minDay = findMeDays(weights, mid);

    if (minDay <= days) {
      ans = mid;
      allWeights = mid - 1;
    } else {
      maxValue = mid + 1;
    }
  }
  return ans;
};

function findMeDays(weights, maxValue) {
  let currDay = 1;
  let weight = 0;
  for (let i of weights) {
    if (weight + i > maxValue) {
      currDay++;
      weight = i;
    } else {
      weight += i;
    }
  }
  return currDay;
}
