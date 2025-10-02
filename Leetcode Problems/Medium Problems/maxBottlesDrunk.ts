// Question Link: https://leetcode.com/problems/water-bottles-ii
// 3100. Water Bottles II

function maxBottlesDrunk(numBottles: number, numExchange: number): number {
    let emptyBottles = numBottles
    let res = numBottles
    
    while(numExchange <= emptyBottles) {
        res++;
        emptyBottles -= numExchange - 1;
        numExchange++;
    }
    return res
};
