// Question Link: https://leetcode.com/problems/find-all-duplicates-in-an-array
// 442. Find All Duplicates in an Array

var findDuplicates = function(nums) {
    let res = [];
    for(let i = 0; i < nums.length; i++) {
        
        let num = Math.abs(nums[i]) - 1
        if(nums[num] < 0) {
            res.push(num + 1);
        } else {
            nums[num] = -nums[num];
        }
    }
    return res
};
