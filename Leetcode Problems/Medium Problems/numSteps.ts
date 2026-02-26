// Question Link: https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one
// 1404. Number of Steps to Reduce a Number in Binary Representation to One

function numSteps(s: string): number {
    let steps = 0;
    let carry = 0;

    for (let i = s.length - 1; i > 0; i--) {
        const bit = Number(s[i]);

        if (bit + carry === 1) {
            // odd
            steps += 2;
            carry = 1;
        } else {
            // even
            steps += 1;
        }
    }

    return steps + carry;
}
