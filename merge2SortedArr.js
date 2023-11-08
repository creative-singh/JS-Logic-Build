function twoSortedArr(arr1, arr2) {
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

console.log(twoSortedArr([1, 2, 3], [3]))
console.log(twoSortedArr([1, 2, 3], [1, 2, 3, 3, 4]))
console.log(twoSortedArr([4, 5, 6, 7, 8], [1, 2, 3]))
console.log(twoSortedArr([1, 2, 3], [4, 5, 6, 7, 8]))

