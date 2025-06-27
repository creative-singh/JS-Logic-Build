// Question Link: https://leetcode.com/problems/find-lucky-integer-in-an-array
// 1394. Find Lucky Integer in an Array

var findLucky = function(arr) {
    let occ = new Map()
    let max = -1
    for(let elem of arr) {
        occ.set(elem, occ.get(elem) + 1 || 1)
    }
    for(let [key, val] of occ) {
        if(key === val) {
            max = Math.max(max, key)
        }
    }

    return max
};