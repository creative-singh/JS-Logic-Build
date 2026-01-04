// Question Link: https://leetcode.com/problems/four-divisors
// 1390. Four Divisors


var sumFourDivisors = function(nums) {
    let res = 0;

    for (let num of nums) {

        // Prime numbers have only 2 divisors → skip
        if (isPrime(num)) continue

        // Perfect squares cannot have exactly 4 divisors → skip
        const root = Math.sqrt(num)
        if (Number.isInteger(root)) continue

        let divisorCount = 0
        let firstDivisor = 0

        // Check divisors only till √num
        for (let i = 2; i <= root; i++) {

            // More than one divisor pair → more than 4 divisors
            if (divisorCount > 1) break

            if (num % i === 0) {
                divisorCount++
                firstDivisor = i
            }
        }

        // Exactly one divisor pair → total 4 divisors
        if (divisorCount === 1) {
            // Divisors are: 1, num, i, num/i
            res += 1 + num + firstDivisor + (num / firstDivisor)
        }
    }

    return res
};


/**
 * Optimized prime check using 6k ± 1 rule
 */
function isPrime(n) {
    if (n <= 1) return false
    if (n <= 3) return true
    if (n % 2 === 0 || n % 3 === 0) return false

    let i = 5
    while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) return false
        i += 6
    }
    return true
}
