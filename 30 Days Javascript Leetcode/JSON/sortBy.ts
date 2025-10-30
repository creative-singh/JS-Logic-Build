// Question Link: https://leetcode.com/problems/sort-by
// 2724. Sort By

var sortBy = function(arr, fn) {
    return arr.sort((a,b) => fn(a) - fn(b))
};
