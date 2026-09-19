// Question Link: https://leetcode.com/problems/circle-and-rectangle-overlapping/
// 1401. Circle and Rectangle Overlapping

function checkOverlap(radius: number, xCenter: number, yCenter: number, x1: number, y1: number, x2: number, y2: number): boolean {
    const x = Math.max(x1, Math.min(xCenter, x2)) - xCenter;
    const y = Math.max(y1, Math.min(yCenter, y2)) - yCenter;

    return x * x + y * y <= radius * radius;
};
