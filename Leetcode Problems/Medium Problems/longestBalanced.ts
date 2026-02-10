// Question Link: https://leetcode.com/problems/longest-balanced-subarray-i
// 3719. Longest Balanced Subarray I

var longestBalanced = function(nums) {
    let max = 0
    
    for(let i = 0; i < nums.length; i++) {
        let odd = new Set(), even = new Set();

        for(let j = i; j < nums.length; j++) {
            if(nums[j] % 2 === 0) {
                even.add(nums[j])
            } else {
                odd.add(nums[j])
            }

            if(odd.size === even.size) {
                max = Math.max(max, j - i + 1)
            }
        }
    }

    return max;
};
