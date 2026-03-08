// Question Link: https://leetcode.com/problems/find-unique-binary-string
// 1980. Find Unique Binary String

function findDifferentBinaryString(nums: string[]): string {
    let res = "";

    for(let i = 0; i < nums.length; i++) {
        if(nums[i][i] === "0") {
            res += "1"
        } else {
            res += "0"
        }
    }
    return res;
};
