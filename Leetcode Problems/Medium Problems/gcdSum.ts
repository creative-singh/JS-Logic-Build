// Question Link: https://leetcode.com/problems/sum-of-gcd-of-formed-pairs
// 3867. Sum of GCD of Formed Pairs

function gcdSum(nums: number[]): number {
    const n = nums.length, prefixGcd = new Int32Array(n);
    const gcd = (a, b) => {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    };
    
    let maxSoFar = 0;
    
    for (let i = 0; i < n; i++) {
        if (nums[i] > maxSoFar) {
            maxSoFar = nums[i];
        }
        prefixGcd[i] = gcd(nums[i], maxSoFar);
    }

    prefixGcd.sort();
    
    let totalSum = 0;
    const half = Math.floor(n / 2);
    
    for (let i = 0; i < half; i++) {
        totalSum += gcd(prefixGcd[i], prefixGcd[n - 1 - i]);
    }
    
    return totalSum;
};
