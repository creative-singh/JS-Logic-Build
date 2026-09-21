// Question Link: https://leetcode.com/problems/find-x-value-of-array-i
// 3524. Find X Value of Array I

function resultArray(nums: number[], k: number): number[] {
    let result = new Array(k).fill(0), state = new Array(k).fill(0);

    for (const value of nums) {
        const rem = value % k, nextState = new Array(k).fill(0);

        for (let r = 0; r < k; r++) {
            const newRem = (r * rem) % k;
            nextState[newRem] += state[r];
            result[newRem] += state[r];
        }

        nextState[rem]++;
        result[rem]++;
        state = nextState;
    }
    return result;
};
