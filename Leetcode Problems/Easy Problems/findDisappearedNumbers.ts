// Question Link: https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array
// 448. Find All Numbers Disappeared in an Array

var findDisappearedNumbers = function(nums) {
    const unique = new Set(nums)
    let res = []
    for(let i = 1; i <= nums.length; i++) {
        if(!unique.has(i)) {
            res.push(i)
        }
    }
    return res;
};
