// Question Link: https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary

var average = function (salary) {
  let min = Math.min(...salary);
  let minInd = salary.indexOf(min);
  salary.splice(minInd, 1);

  let max = Math.max(...salary);
  let maxInd = salary.indexOf(max);
  salary.splice(maxInd, 1);

  let sum = 0;
  for (let i of salary) {
    sum += i;
  }
  return sum / salary.length;
};
