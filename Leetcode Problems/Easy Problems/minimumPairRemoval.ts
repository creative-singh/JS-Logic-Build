// Question Link: https://leetcode.com/problems/minimum-pair-removal-to-sort-array-i
// 3507. Minimum Pair Removal to Sort Array I

var minimumPairRemoval = function(nums) {
    let sorted = false;
    let res = 0;
    while(!sorted) {
        sorted = true;
        let idx = 0;
        let min = null;

        for(let i = 0; i < nums.length - 1; i++) {
            let [curr, next] = [nums[i], nums[i+1]]
            if(min === null) {
                min = curr + next
            } else if(curr + next < min) {
                min = curr + next
                idx = i
            }

            if(curr > next) {
                sorted = false
            }
        }

        if(!sorted) {
            res++;
            nums.splice(idx, 2, nums[idx] + nums[idx + 1])
        }
    }
    return res; 
};
