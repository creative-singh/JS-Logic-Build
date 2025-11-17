// Question Link: https://leetcode.com/problems/arranging-coins
// 441. Arranging Coins

var arrangeCoins = function(n) {
    let i = 1;
    while(n > i) {
        n = n - i;
        if(n > i)
            i++;
    }
    return i
};
