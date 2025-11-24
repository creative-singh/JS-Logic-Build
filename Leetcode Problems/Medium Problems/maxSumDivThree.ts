// Question Link: https://leetcode.com/problems/greatest-sum-divisible-by-three
// 1262. Greatest Sum Divisible by Three

var maxSumDivThree = function(nums) {
    let sum = 0;
    const INF = 1e9;
    let r1_min1 = INF, r1_min2 = INF;
    let r2_min1 = INF, r2_min2 = INF;

    for (const x of nums) {
        sum += x;
        const r = x % 3;
        if (r === 1) {
            if (x < r1_min1) {
                r1_min2 = r1_min1;
                r1_min1 = x;
            } else if (x < r1_min2) {
                r1_min2 = x;
            }
        } else if (r === 2) {
            if (x < r2_min1) {
                r2_min2 = r2_min1;
                r2_min1 = x;
            } else if (x < r2_min2) {
                r2_min2 = x;
            }
        }
    }

    const mod = sum % 3;
    if (mod === 0) return sum;

    let removeCost = 1e18;

    if (mod === 1) {
        if (r1_min1 !== INF) removeCost = Math.min(removeCost, r1_min1);
        if (r2_min2 !== INF) removeCost = Math.min(removeCost, r2_min1 + r2_min2);
    } else {
        if (r2_min1 !== INF) removeCost = Math.min(removeCost, r2_min1);
        if (r1_min2 !== INF) removeCost = Math.min(removeCost, r1_min1 + r1_min2);
    }

    if (removeCost >= 1e18) return 0;
    return sum - removeCost;
};
