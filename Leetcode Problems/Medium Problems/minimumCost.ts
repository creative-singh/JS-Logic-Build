// Question Link: https://leetcode.com/problems/minimum-cost-to-acquire-required-items
// 3789. Minimum Cost to Acquire Required Items

function minimumCost(cost1: number, cost2: number, costBoth: number, need1: number, need2: number): number {
    const bound = (needA, costA, needB, costB) => {
        const pA = Math.min(costA, costBoth); 
        const pB = Math.min(costB, costBoth - pA);

        return needA * pA + needB * pB;
    };
    return Math.max(bound(need1, cost1, need2, cost2), bound(need2, cost2, need1, cost1));
};
