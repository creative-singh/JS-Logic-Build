// Question Link: https://leetcode.com/problems/sequential-digits
// 1291. Sequential Digits

function sequentialDigits(low: number, high: number): number[] {
    let res = [];

    for (let i = 2; i <= 9; i++) {
        for (let j = 1; j + i - 1 <= 9; j++) {
            let num = 0, digit = j;

            for (let k = 0; k < i; k++) {
                num = num * 10 + digit++;
            }
            if (num >= low && num <= high)
                res.push(num)
        }
    }
    return res;
};
