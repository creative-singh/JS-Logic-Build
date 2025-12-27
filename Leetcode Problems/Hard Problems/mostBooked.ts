// Question Link: https://leetcode.com/problems/meeting-rooms-iii
// 2402. Meeting Rooms III

var mostBooked = function(n, meetings) {
    meetings.sort((a, b) => a[0] - b[0])
    let cnt = Array(n).fill(0)
    let busy = Array(n).fill(0)

    for(let [start, end] of meetings) {
        let earliest = Number.MAX_SAFE_INTEGER;
        let roomIdx = -1;
        let assigned = false;
        
        for(let i = 0; i < n; i++) {
            if(busy[i] < earliest) {
                earliest = busy[i];
                roomIdx = i;
            }

            if(busy[i] <= start) {
                busy[i] = end
                cnt[i]++;
                assigned = true;
                break
            }
        }

        if(!assigned) {
            busy[roomIdx] += (end - start)
            cnt[roomIdx]++;
        }
    }

    return cnt.reduce((best, val, i) => val > cnt[best] ? i : best, 0)
};
