// Question Link: https://leetcode.com/problems/find-closest-person
// 3516. Find Closest Person

var findClosest = function(x, y, z) {
    let distX = Math.abs(z - x), distY = Math.abs(y - z);
    if(distX < distY) {
        return 1
    } else if(distX === distY) {
        return 0
    } else {
        return 2
    }
};
