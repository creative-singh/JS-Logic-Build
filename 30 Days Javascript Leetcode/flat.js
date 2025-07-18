// Question Link: https://leetcode.com/problems/flatten-deeply-nested-array
// 2625. Flatten Deeply Nested Array

var flat = function (arr, n) {
    if(n === 0) return arr;
    let res = [];

    function helper(arr, n) {
        for(let elem of arr) {
            if(Array.isArray(elem) && n) {
                helper(elem, n - 1)
            } else {
                res.push(elem)
            }
        }
    }

    helper(arr, n)
    return res
};
