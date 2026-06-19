// Question Link: https://leetcode.com/problems/find-the-highest-altitude
// 1732. Find the Highest Altitude

function largestAltitude(gain: number[]): number {
    const n = gain.length;
    let max = 0;

    for(let i = 0; i <= n; i++) {
        let alt = 0;
        for(let j = 0; j < i; j++) {
            alt += gain[j]
        }
        max = Math.max(max, alt)
    }
    return max;
};
