// Question Link: https://leetcode.com/problems/single-number-iii
// 260. Single Number III

var singleNumber = function(nums) {
    let set = new Set();
    for(let i of nums) {
        if(set.has(i)) {
            set.delete(i)
        } else {
            set.add(i)
        }
    }
    return [...set]
};
