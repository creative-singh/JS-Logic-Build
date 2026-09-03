// Question Link: https://leetcode.com/problems/construct-uniform-parity-array-ii
// 3876. Construct Uniform Parity Array II

function uniformArray(nums: number[]): boolean {
    let smallOdd = Infinity, oddCount = 0, evenCount = 0;
    
    for (let num of nums) {
        if (num % 2 !== 0) {
            if (num < smallOdd) smallOdd = num;
            oddCount++;
        }
        else evenCount++;
    }

    if (evenCount === nums.length) return true;

    for (let num of nums) {
        if (num % 2 === 0 && num < smallOdd) return false
    }
    return true;
};
