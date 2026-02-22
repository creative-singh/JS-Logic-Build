// Question Link: https://leetcode.com/problems/binary-gap
// 868. Binary Gap

function binaryGap(n: number): number {
    const binary = n.toString(2);
    let max = 0, temp = 1;
    for(let i = 1; i < binary.length; i++) {
        if(binary[i] === '1') {
            max = Math.max(temp, max)
            temp = 1;
        } else {
            temp++
        }
    }
    return max;
};
