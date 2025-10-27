// Question Link: https://leetcode.com/problems/number-of-laser-beams-in-a-bank
// 2125. Number of Laser Beams in a Bank

var numberOfBeams = function(bank) {
    let beams = [];
    for(let alarm of bank) {
        let beam = 0;
        for(let j of alarm) {
            beam += Number(j)
        }
        if(beam) {
            beams.push(beam)
        }
    }

    let res = 0;
    for(let i = 0; i < beams.length - 1; i++) {
        res += (beams[i] * beams[i + 1])
    }
    return res
};
