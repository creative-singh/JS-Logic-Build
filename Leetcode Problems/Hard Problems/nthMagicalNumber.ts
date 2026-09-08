// Question Link: https://leetcode.com/problems/nth-magical-number/
// 878. Nth Magical Number

function nthMagicalNumber(n: number, a: number, b: number): number {
    let temp;
    if (b > a) {
        temp = a;
        a = b;
        b = temp;
    }

    let shareFreq = ((a + b) / GCD(a, b)) - 1, mod = (10 ** 9) + 7;
    let numShares = Math.floor(n / shareFreq), superN = n + numShares;
    let X = Math.ceil(superN * b / (a + b)), Y = Math.ceil(superN - (superN * b / (a + b)));

    if (X * a <= Y * b) return (X * a) % mod;
    else return (Y * b) % mod;
};

var GCD = function (x, y) {
    while (y != 0) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
};
