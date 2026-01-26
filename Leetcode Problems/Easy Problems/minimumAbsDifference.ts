// Question Link: https://leetcode.com/problems/minimum-absolute-difference
// 1200. Minimum Absolute Difference

var minimumAbsDifference = function(arr) {
    arr.sort((a, b) => a - b);

    let minDiff = Infinity;
    let temp = [];

    for(let i = 1; i < arr.length; i++) {
        const diff = arr[i] - arr[i - 1];
        if(diff < minDiff) {
            minDiff = diff;
            temp = [i - 1]
        } else if (diff === minDiff) {
            temp.push(i - 1)
        }
    }
    return temp.map(i => [arr[i], arr[i + 1]])
};
