// Question Link: https://leetcode.com/problems/median-of-two-sorted-arrays
// 4. Median of Two Sorted Arrays

var findMedianSortedArrays = function(nums1, nums2) {
    let arr = []
    while(nums1.length && nums2.length) {
        if(nums1[0] < nums2[0]){
            arr.push(nums1[0])
            nums1.splice(0, 1)
        } else {
            arr.push(nums2[0])
            nums2.splice(0, 1)
        }
    }
    arr = [...arr, ...nums1, ...nums2]
    let mid = Math.floor((0, arr.length - 1) / 2)
    if(arr.length % 2 == 0) {
        return Math.floor(arr[mid] + arr[mid+1]) / 2
    } else {
        return arr[mid]
    }
};
