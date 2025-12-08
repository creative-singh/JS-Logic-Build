// Question Link: https://leetcode.com/problems/count-odd-numbers-in-an-interval-range
// 1523. Count Odd Numbers in an Interval Range

var countOdds = function(low, high) {
    let res = 0;
    for(let i = low; i <= high; i++) {
        if(i % 2 !== 0) res++;
    }
    return res
};

var countOdds = function(low, high) {
    return Math.floor((high - low + 1 + (low % 2)) / 2);
};
