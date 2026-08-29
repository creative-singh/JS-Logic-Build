// Question Link: https://leetcode.com/problems/make-lexicographically-smallest-array-by-swapping-elements
// 2948. Make Lexicographically Smallest Array by Swapping Elements

function lexicographicallySmallestArray(nums: number[], limit: number): number[] {
    let sort = nums.slice().sort((a, b) => a - b), temp = [], map = new Map(), id = -1;

    for (let i = 0; i < sort.length; i++) {
        if (i === 0 || sort[i] - sort[i - 1] > limit) {
            temp.push([]);
            id++;
        }

        temp[id].push(sort[i]);
        map.set(sort[i], id);
    }

    const idx = new Int32Array(temp.length);

    for (let i = 0; i < nums.length; i++) {
        const cur = map.get(nums[i]);
        nums[i] = temp[cur][idx[cur]];
        idx[cur]++;
    }

    return nums;
};
