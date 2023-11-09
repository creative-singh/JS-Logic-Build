// Question Link: https://leetcode.com/problems/median-of-two-sorted-arrays

function findMedianSortedArrays(nums1, nums2) {
  let arr = sortArr(nums1, nums2)
  let len = arr.length
  if (len % 2 === 0) {
    let val = Math.floor(len / 2)
    return (arr[val] + arr[val - 1]) / 2
  } else {
    return arr[Math.floor(len / 2)]
  }
};

function sortArr(arr1, arr2) {
  let ptr1 = arr1.length - 1
  let ptr2 = arr2.length - 1
  while (ptr1 >= 0 && ptr2 >= 0) {
    if (arr2[ptr2] > arr1[ptr1]) {
      arr1.splice(ptr1 + 1, 0, arr2[ptr2])
      ptr2--
    } else {
      ptr1--
    }
  }
  if (ptr2 >= 0) {
    arr1 = [...arr2.slice(0, ptr2 + 1), ...arr1]
  }
  return arr1
}