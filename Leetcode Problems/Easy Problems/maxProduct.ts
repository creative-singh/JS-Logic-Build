// Question Link: https://leetcode.com/problems/maximum-product-of-two-digits
// 3536. Maximum Product of Two Digits

function maxProduct(n: number): number {
    let d1 = 0, d2 = 0;

    while (n > 0) {
        const rem = n % 10;

        if (rem >= d1) {
            d2 = d1;
            d1 = rem;
        } else if (rem > d2) {
            d2 = rem;
        }

        n = Math.floor(n / 10);
    }

    return d1 * d2;
};
