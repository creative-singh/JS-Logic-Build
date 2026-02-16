// Question Link: https://leetcode.com/problems/reverse-bits
// 190. Reverse Bits

var reverseBits = function(n) {
    let res = 0;
    for(let i = 0; i < 32; i++) {
        res = res << 1 // shift res left
        res += (n & 1); // add least significant bit of n to res
        n = n >>> 1 // shift n to the right
    }
    return res >>> 0 // ensuring result is unsigned
};
