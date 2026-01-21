// Question Link: https://leetcode.com/problems/maximum-product-subarray
// 152. Maximum Product Subarray

var maxProduct = function(nums) {
    let n = nums.length, max = nums[0];

    for(let i = 0; i < n; i++) {
        let prod = 1;
        for(let j = i; j < n; j++) {
            prod *= nums[j]
            max = Math.max(max, prod)
        }
    }
    return max
};
