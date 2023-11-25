// Question Link: https://leetcode.com/problems/peak-index-in-a-mountain-array

var peakIndexInMountainArray = (arr) => {
  if (arr.length < 2) return 0
  let st = 0
  let en = arr.length - 1
  while (st <= en) {
    let mid = Math.floor((st + en) / 2)
    if (arr[mid + 1] < arr[mid] && arr[mid - 1] < arr[mid]) return mid
    arr[mid] < arr[mid + 1] ? st = mid + 1 : en = mid - 1
  }
};

console.log(peakIndexInMountainArray([0, 1, 0]))              // 1
console.log(peakIndexInMountainArray([0, 2, 1, 0]))           // 1
console.log(peakIndexInMountainArray([0, 10, 5, 2]))          // 1
console.log(peakIndexInMountainArray([1, 2, 3, 1]))           // 2
console.log(peakIndexInMountainArray([1, 2, 1, 3, 5, 6, 4]))  // 5