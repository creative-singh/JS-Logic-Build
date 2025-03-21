// Question Link: https://leetcode.com/problems/sliding-window-maximum/description/

var maxSlidingWindow = function(nums, k) {
    if(k === 1) return nums
    let st = []
    let op = []
    for(let i = 0; i < nums.length; i++) {
        if(st.length && st[0] <= i - k) {
            st.shift()
        }
        while(st.length && nums[st[st.length-1]] <= nums[i]) {
            st.pop();
        }
        st.push(i)
        if(i >= k-1) {
            op.push(nums[st[0]])
        }
    }
    return op
};