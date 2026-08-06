// Question Link: https://leetcode.com/problems/smallest-divisible-digit-product-i
// 3345. Smallest Divisible Digit Product I

function smallestNumber(n: number, t: number): number {
    while (true) {
        let product = 1, x = n;

        while (x > 0) {
            product *= x % 10;
            x = Math.floor(x / 10);
        }

        if (product % t === 0) {
            return n;
        }

        n++;
    }
};
