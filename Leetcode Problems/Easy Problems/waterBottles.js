// Question Link: https://leetcode.com/problems/water-bottles/

var numWaterBottles = function (numBottles, numExchange) {
  let count = numBottles
  while (numBottles >= numExchange) {
    let fullBottles = Math.floor(numBottles / numExchange)
    count += fullBottles
    numBottles = fullBottles + (numBottles % numExchange)
  }
  return count
};