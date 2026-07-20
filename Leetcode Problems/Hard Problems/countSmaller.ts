// Question Link: https://leetcode.com/problems/count-of-smaller-numbers-after-self
// 315. Count of Smaller Numbers After Self

function countSmaller(nums: number[]): number[] {
    let res = [], sorted = [];

    for (let i = nums.length - 1; i >= 0; i--) {
        const index = insert(sorted, nums[i]);
        res.push(index);
        sorted.splice(index, 0, nums[i]);
    }

    return res.reverse();
}

function insert(arr, num) {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
};
