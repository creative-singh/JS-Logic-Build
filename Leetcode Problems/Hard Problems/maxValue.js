// Question Link: https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii

// 1751. Maximum Number of Events That Can Be Attended II

var maxValue = function(events, k) {
    events.sort((a,b) => a[0] - b[0])
    let N = events.length
    let dp = Array.from({ length: N + 1 }, () => Array(k + 1).fill(0))

    if(k == 1) {
        let maxVal = 0;
        for(const [start, end, val] of events) {
            maxVal = Math.max(maxVal, val)
        }
        return maxVal
    }

    for(let i = N - 1; i >= 0; i--) {
        let left = i + 1;
        let right = N;
        const endTime = events[i][1]
        while(left < right) {
            const mid = Math.floor((right - left) / 2) + left;
            if(events[mid][0] > endTime) {
                right = mid;
            } else {
                left = mid + 1
            }
        }
        const next = left;

        for(let j = k - 1; j >= 0; j--) {
            dp[i][j] = Math.max(
                dp[i + 1][j],
                dp[next][j + 1] + events[i][2]
            )
        }
    }
    return dp[0][0]
};
