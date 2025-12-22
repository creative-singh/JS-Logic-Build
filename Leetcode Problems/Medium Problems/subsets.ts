// Question Link: https://leetcode.com/problems/subsets
// 78. Subsets

function subsets(nums: number[]): number[][] {
    let res = []

    function recurse(i, temp=[]) {
        if(i === nums.length) {
            res.push([...temp])
            return
        }

        temp.push(nums[i])
        recurse(i + 1, temp)

        temp.pop()
        recurse(i + 1, temp)
    }

    recurse(0)
    return res
};
