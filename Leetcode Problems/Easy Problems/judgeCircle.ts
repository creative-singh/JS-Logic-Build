// Question Link: https://leetcode.com/problems/robot-return-to-origin
// 657. Robot Return to Origin

function judgeCircle(moves: string): boolean {
    let dir = [0, 0];
    for(let i of moves) {
        if(i === "U") {
            dir[1] += 1
        } else if(i === 'D') {
            dir[1] -= 1
        } else if(i === "R") {
            dir[0] += 1
        } else {
            dir[0] -= 1
        }
    }
    return dir[0] === 0 && dir[1] === 0
};
