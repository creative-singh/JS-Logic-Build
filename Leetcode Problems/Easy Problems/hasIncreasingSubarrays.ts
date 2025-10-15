// Question Link: https://leetcode.com/problems/adjacent-increasing-subarrays-detection-i
// 3349. Adjacent Increasing Subarrays Detection I

function hasIncreasingSubarrays(nums: number[], k: number): boolean {
    let n = nums.length;
    let prev = 0; let curr = 1;
    let comp = 2 * k
    for(let i = 1; i < n; i++) {
        if(prev >= k && curr >= k && prev + curr >= comp) {
            return true
        }
        if(nums[i - 1] < nums[i]) {
            curr++
            if(curr === comp) {
                return true
            }
        } else {
            prev = curr
            curr = 1
        }
    }
    if(prev >= k && curr >= k && prev + curr >= comp){
        return true
    }
    return false
};
