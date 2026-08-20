// Question Link: https://leetcode.com/problems/distribute-elements-into-two-arrays-i
// 3069. Distribute Elements Into Two Arrays I

function resultArray(nums: number[]): number[] {
    let arr1 = [nums[0]], arr2 = [nums[1]];

    for (let i = 2; i < nums.length; i++) {
        const x = arr1[arr1.length - 1], y = arr2[arr2.length - 1];

        if (x > y) {
            arr1.push(nums[i]);
        } else {
            arr2.push(nums[i]);
        }
    }

    return [...arr1, ...arr2];
};
