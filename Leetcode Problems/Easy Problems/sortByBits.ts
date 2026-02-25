// Question Link: https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits
// 1356. Sort Integers by The Number of 1 Bits

var sortByBits = function(arr) {
    let obj = {};
    for(let i of arr) {
        const binary = i.toString(2).split('');
        const sum = binary.reduce((a, b) => parseInt(a) + parseInt(b), 0);
        if(obj[sum]) {
            obj[sum].push(i)
        } else {
            obj[sum] = [i]
        }
    }
    let res = [];
    for(let i in obj) {
        res.push(...obj[i].sort((a,b) => a - b))
    }
    return res;
};
