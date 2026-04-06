// Question Link: https://leetcode.com/problems/walking-robot-simulation
// 874. Walking Robot Simulation

var robotSim = function (commands, obstacles) {
    let set = new Set();
    for (let [x, y] of obstacles) {
        set.add(`${x}_${y}`);
    };

    const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let x = 0, y = 0, d = 0, maxDist = 0;

    for (let i of commands) {
        if (i === -1) {
            d = (d + 1) % 4;
        }
        else if (i === -2) {
            d = (d + 3) % 4;
        } else {
            for (let j = 0; j < i; j++) {
                const dx = x + dir[d][0], dy = y + dir[d][1];

                if (set.has(`${dx}_${dy}`))
                    break
                x = dx; y = dy;
                maxDist = Math.max(maxDist, (x * x) + (y * y))
            }
        }
    }
    return maxDist;
};
