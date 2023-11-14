// Question Link: https://leetcode.com/problems/merge-sorted-array/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  if (n === 0) return
  let p1 = nums1.length - 1
  while (n > 0) {
    if (m !== 0) {
      if (nums2[n - 1] > nums1[m - 1]) {
        nums1.splice(p1, 1, nums2[n - 1])
        n--
      } else {
        nums1.splice(p1, 1, nums1[m - 1])
        m--
      }
    } else {
      nums1.splice(p1, 1, nums2[n - 1])
      n--
    }
    p1--
  }
};