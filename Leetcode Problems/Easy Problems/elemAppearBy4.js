// Question Link: https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/

var findSpecialInteger = function (arr) {
  let freq = Math.floor(arr.length / 4);
  for (let i = 0; i < arr.length - freq; i++) {
    if (arr[i] == arr[i + freq]) {
      return arr[i];
    }
  }
};

console.log(
  findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10])
); // 6
console.log(findSpecialInteger([1, 1])); // 1
