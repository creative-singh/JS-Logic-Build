// Question Link: https://leetcode.com/problems/add-to-array-form-of-integer

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  let resArr = []
  let carry = 0
  let pointer = num.length - 1

  while (pointer >= 0 || k > 0) {
    let addVal = 0

    if (pointer >= 0) {
      addVal = num[pointer]
    }

    let lastNum = getLastDigit(k)

    let sum = addVal + lastNum + carry

    let val = getLastDigit(sum)
    carry = removeLastDigit(sum)

    resArr.unshift(val)

    pointer--;
    k = removeLastDigit(k)
  }

  if (carry) {
    resArr.unshift(carry)
  }

  return resArr;
};

function getLastDigit(num) {
  return num % 10
}

function removeLastDigit(num) {
  return Math.floor(num / 10)
}