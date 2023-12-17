var decodeString = function (s) {
  let str = [];
  let num = [];
  let numTemp = "";
  for (let i of s) {
    if (!isNaN(i)) {
      numTemp = numTemp.concat(i);
    } else if (i == "[") {
      num.push(numTemp);
      str.push(i);
      numTemp = "";
    } else if (i != "]") {
      str.push(i);
    } else {
      let tempChar = "";
      let alpha = [];
      let item = str.pop();
      while (item != "[") {
        alpha.unshift(item);
        item = str.pop();
      }

      let numb = num.pop();
      tempChar = alpha.join("").repeat(numb);
      str.push(tempChar);
    }
  }
  return str.join("");
};
