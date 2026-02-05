// Question Link: https://leetcode.com/problems/transformed-array
// 3379. Transformed Array

var constructTransformedArray = function(nums) {
    const n = nums.length;
    const result = new Array(n);

    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) {
            result[i] = 0;
            continue;
        }

        const shift = nums[i];
        const idx = ((i + shift) % n + n) % n;
        result[i] = nums[idx];
    }

    return result;
};
