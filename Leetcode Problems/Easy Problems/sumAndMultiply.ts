// Question Link: https://leetcode.com/problems/concatenate-non-zero-digits-and-multiply-by-sum-i
// 3754. Concatenate Non-Zero Digits and Multiply by Sum I

function sumAndMultiply(n: number): number {
    let x = "", sum = 0;
    for (let i of String(n)) {
        if (i !== "0") {
            x += i;
            sum += Number(i)
        }
    }
    return Number(x) * sum;
};
