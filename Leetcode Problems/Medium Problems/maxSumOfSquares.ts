// Question Link: https://leetcode.com/problems/maximize-sum-of-squares-of-digits
// 3723. Maximize Sum of Squares of Digits

function maxSumOfSquares(num: number, sum: number): string {
    if (sum > 9 * num) return "";
    const k = Math.floor(sum / 9), r = sum % 9;

    let res = "9".repeat(k) + (r > 0 ? String(r) : "");

    return res + "0".repeat(num - res.length);
};
