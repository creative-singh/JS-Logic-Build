// Question Link: https://leetcode.com/problems/number-of-employees-who-met-the-target

/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function (hours, target) {
  let length = hours.length;
  let i = 0;
  while (i < length) {
    if (hours[i] < target) {
      hours.splice(i, 1);
      --length;
    } else {
      i++;
    }
  }
  return hours.length;
};