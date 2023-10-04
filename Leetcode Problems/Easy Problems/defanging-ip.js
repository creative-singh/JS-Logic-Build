/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  // return address.split(".").join("[.]");
  let str = ""
  for (let i of address) {
    if (i === ".") {
      str += "[.]"
    } else {
      str += i
    }
  }
  return str;
};