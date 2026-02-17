// Question Link: https://leetcode.com/problems/binary-watch
// 401. Binary Watch


function readBinaryWatch(turnedOn: number): string[] {
    let res = [];

    for(let h = 0; h < 12; h++) {
        for(let m = 0; m < 60; m++) {
            const count = (n) => n.toString(2).split('0').join("").length;

            if(count(h) + count(m) === turnedOn) {
                const time = h + ":" + (m < 10 ? "0" + m : m)
                res.push(time)
            }
        }
    }
    return res
};
