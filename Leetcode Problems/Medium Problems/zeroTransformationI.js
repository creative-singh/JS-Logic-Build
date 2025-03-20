// Question Link: https://leetcode.com/problems/zero-array-transformation-i/description/

var isZeroArray = function(nums, queries) {
    let len = nums.length
    let arr = new Array(len).fill(0)

    for(let i = 0; i < queries.length; i++) {
        arr[queries[i][0]] += 1
        arr[queries[i][1] + 1] -= 1
    }

    let sum = 0
    for(let i = 0; i < len; i++) {
        sum += arr[i]
        if(sum < nums[i]) return false
    }
    return true
};