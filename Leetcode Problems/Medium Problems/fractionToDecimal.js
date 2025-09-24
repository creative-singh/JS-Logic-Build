// Question Link: https://leetcode.com/problems/fraction-to-recurring-decimal
// 166. Fraction to Recurring Decimal

var fractionToDecimal = function(numerator, denominator) {
    if(numerator === 0) return "0";
    let res = "";

    // Negative Sign
    // if((numerator < 0) ^ (denominator < 0)) { // XOR
    if((numerator < 0) !== (denominator < 0)) {
        res += "-"
    }

    // As Negative is covered ow convert to positive value
    let num = Math.abs(numerator);
    let den = Math.abs(denominator);

    res += Math.floor(num / den);
    let remainder = num % den;

    if(!remainder) return res;

    res += ".";
    const map = new Map();

    while(remainder) {
        if(map.has(remainder)) {
            let idx = map.get(remainder);
            res = `${res.slice(0, idx)}(${res.slice(idx)})`;
            break;
        }

        map.set(remainder, res.length);
        remainder *= 10;
        res += Math.floor(remainder / den);
        remainder %= den;
    }

    return res;
};
