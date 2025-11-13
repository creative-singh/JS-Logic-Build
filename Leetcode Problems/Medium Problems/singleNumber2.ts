// Question Link: https://leetcode.com/problems/single-number-ii
// 137. Single Number II

var singleNumber = function(nums) {
    let numOcc = new Map();
    for(let i of nums) {
        numOcc.set(i, (numOcc.get(i) || 0) + 1);
    }
    
    for(let [key, val] of numOcc) {
        if(val === 1) return key
    }
};
