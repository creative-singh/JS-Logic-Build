// Question Link: https://leetcode.com/problems/check-divisibility-by-digit-sum-and-product
// 3622. Check Divisibility by Digit Sum and Product

function checkDivisibility(n: number): boolean {
    let checkNumber = n, sum = 0, product = 1;

    while (checkNumber > 0) {
        const digit = checkNumber % 10;
        sum += digit;
        product *= digit;
        checkNumber = Math.floor(checkNumber / 10);
    }

    return n % (sum + product) === 0;
};
