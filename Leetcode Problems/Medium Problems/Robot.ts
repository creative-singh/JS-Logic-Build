// Question Link: https://leetcode.com/problems/walking-robot-simulation-ii
// 2069. Walking Robot Simulation II

var Robot = function (width, height) {
    this.width = width;
    this.height = height;
    this.x = 0;
    this.y = 0;
    this.dir = "East";
};

Robot.prototype.step = function (num) {
    const perim = 2 * (this.width - 1) + 2 * (this.height - 1);
    num %= perim;
    if (num === 0) num = perim;

    while (num > 0) {
        if (this.dir === "East") {
            const maxX = Math.min(this.x + num, this.width - 1);
            const rem = num - (maxX - this.x);
            num = rem;
            if (rem === 0) this.x = maxX;
            else {
                this.x = maxX;
                this.dir = "North";
            }
        } else if (this.dir === "West") {
            const minX = Math.max(this.x - num, 0);
            const rem = num - (this.x - minX);
            num = rem;
            if (rem === 0) this.x = minX;
            else {
                this.x = minX;
                this.dir = "South";
            }
        } else if (this.dir === "North") {
            const maxY = Math.min(this.y + num, this.height - 1);
            const rem = num - (maxY - this.y);
            num = rem;
            if (rem === 0) this.y = maxY;
            else {
                this.y = maxY;
                this.dir = "West";
            }
        } else {
            const minY = Math.max(this.y - num, 0);
            const rem = num - (this.y - minY);
            num = rem;
            if (rem === 0) this.y = minY;
            else {
                this.y = minY;
                this.dir = "East";
            }
        }
    }
};

Robot.prototype.getPos = function () {
    return [this.x, this.y]
};

Robot.prototype.getDir = function () {
    return this.dir;
};
