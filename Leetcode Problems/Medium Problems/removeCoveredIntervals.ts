// Question Link: https://leetcode.com/problems/remove-covered-intervals
// 1288. Remove Covered Intervals

function removeCoveredIntervals(intervals: number[][]): number {
    intervals.sort((a, b) => {
        if(a[0] === b[0]) {
            return b[1] - a[1];
        }
        return a[0] - b[0]
    });

    let res = 0, maxEnd = 0;

    for(let [i, j] of intervals) {
        if(j > maxEnd) {
            res++;
            maxEnd = j
        }
    }
    return res;
};
