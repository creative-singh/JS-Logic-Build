// Question Link: https://leetcode.com/problems/132-pattern/
// 456. 132 Pattern

function find132pattern(nums: number[]): boolean {
    let st = [], third = Number.MIN_SAFE_INTEGER;

    for(let i = nums.length - 1; i >= 0; i--) {
        if(nums[i] < third) return true;
        while(st.length && st[st.length - 1] < nums[i]) {
            third = st.pop();
        }
        st.push(nums[i]);
    }
    return false
};
