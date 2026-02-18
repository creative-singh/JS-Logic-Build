// Question Link: https://leetcode.com/problems/binary-number-with-alternating-bits
// 693. Binary Number with Alternating Bits

function hasAlternatingBits(n: number): boolean {
    const binary = n.toString(2);
    let prev = binary[0]
    for(let i = 1; i < binary.length; i++) {
        if(prev === binary[i]) {
            return false
        }
        prev = binary[i]
    }
    return true;
};
