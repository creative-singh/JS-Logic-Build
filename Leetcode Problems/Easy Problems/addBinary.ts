// Question Link: https://leetcode.com/problems/add-binary
// 67. Add Binary

var addBinary = function(a, b) {
    let aBig = BigInt('0b' + a);
    let bBig = BigInt('0b' + b);
    return (aBig + bBig).toString(2);
};
