function cartesian(arr1, arr2) {
  let res = [];
  for (let i of arr1) {
    for (let j of arr2) {
      res.push([i, j]);
    }
  }
  return res
}

console.log(cartesian([1, 2, 3], [4, 5, 6]));
// [ [1, 4], [1, 5], [1, 6], [2, 4], [2, 5], [2, 6], [3, 4], [3, 5], [3, 6] ]

console.log(cartesian([1, 2], [3, 4]));
// [ [1,3], [1,4], [2,3], [2,4] ]