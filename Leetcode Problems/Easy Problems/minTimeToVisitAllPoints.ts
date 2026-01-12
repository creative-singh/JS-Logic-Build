// Question Link: https://leetcode.com/problems/minimum-time-visiting-all-points
// 1266. Minimum Time Visiting All Points

var minTimeToVisitAllPoints = function(p) {
    let ans = 0;
    for (let i = 1; i < p.length; i++) {
        ans += Math.max(
            Math.abs(p[i][0] - p[i - 1][0]),
            Math.abs(p[i][1] - p[i - 1][1])
        );
    }
    return ans;
};
