// Question Link: https://leetcode.com/problems/first-missing-positive
// 41. First Missing Positive

var firstMissingPositive = function(nums) {
    const max = Math.max(...nums)
    let map = new Map();

    let i = 0;
    while(i < nums.length) {
        map.set(nums[i], true)
        i++
    }

    i = 1;
    while(i <= max) {
        if(!map.has(i)) {
            return i
        }
        i++;
    }
    return i
};
