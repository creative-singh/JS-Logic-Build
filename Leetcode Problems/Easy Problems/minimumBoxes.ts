// Question Link: https://leetcode.com/problems/apple-redistribution-into-boxes
// 3074. Apple Redistribution into Boxes

var minimumBoxes = function(apple, capacity) {
    let totalApples = apple.reduce((curr, acc) => curr + acc, 0);
    capacity.sort((a, b) => a - b);
    let res = 0;
    for(let i = capacity.length - 1; i >= 0; i--) {
        if(totalApples > capacity[i]) {
            res++;
            totalApples -= capacity[i]
        } else {
            break;
        }
    }
    return res+1
};
