// Question Link: https://leetcode.com/problems/find-target-indices-after-sorting-array

var targetIndices = function (nums, target) {
  let tCount = 0;
  let num = 0;
  for (let i of nums) {
    if (i < target) {
      num++;
    } else if (target == i) {
      tCount++;
    }
  }
  let res = [];
  while (tCount > 0) {
    res.push(num);
    num++;
    tCount--;
  }
  return res;
};

// 2nd Approach
// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let j = i - 1;
//     let nti = arr[i];
//     while (j >= 0 && arr[j] > nti) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = nti;
//   }
//   return arr;
// }

// var targetIndices = function (nums, target) {
//   let res = [];
//   insertionSort(nums);
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) res.push(i);
//   }
//   return res;
// };
