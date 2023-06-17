/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  // Remember: for in loops works with both objects as well as with arrays but it runs only when it consists of any value
  for (let i in obj) {
    return false
  }
  return true
};