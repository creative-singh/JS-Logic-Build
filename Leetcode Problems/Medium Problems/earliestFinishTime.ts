// Question Link: https://leetcode.com/problems/earliest-finish-time-for-land-and-water-rides-ii/
// 3635. Earliest Finish Time for Land and Water Rides II

function earliestFinishTime(landStartTime: number[], landDuration: number[], waterStartTime: number[], waterDuration: number[]): number {
    const n = landStartTime.length, m = waterStartTime.length;

    let l = Infinity, w = Infinity, minL = Infinity, minW = Infinity;

    for(let i = 0; i < n; i++) {
        l = Math.min(l, landStartTime[i] + landDuration[i]);
    }

    for(let i = 0; i < m; i++) {
        w = Math.min(w, waterStartTime[i] + waterDuration[i]);
        minL = Math.min(minL, Math.max(waterStartTime[i], l) + waterDuration[i]);
    }

    for(let i = 0; i < n; i++) {
        minW = Math.min(minW, Math.max(landStartTime[i], w) + landDuration[i]);
    }

    return Math.min(minW, minL);
};
