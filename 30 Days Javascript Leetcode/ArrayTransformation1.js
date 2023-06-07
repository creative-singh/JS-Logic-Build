var map = function (arr, fn) {
  let newArr = [];
  for (let index = 0; index < arr.length; index++) {
    newArr.push(fn(arr[index], index))
  }
  return newArr;
};