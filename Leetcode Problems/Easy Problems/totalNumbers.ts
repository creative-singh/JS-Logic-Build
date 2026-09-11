// Question Link: https://leetcode.com/problems/unique-3-digit-even-numbers
// 3483. Unique 3-Digit Even Numbers

function totalNumbers(digits: number[]): number {
    const n = digits.length;
    let set = new Set();

    for (let i = 0; i < n; i++) {
        if (digits[i] === 0)
            continue;

        for (let j = 0; j < n; j++) {
            if (j === i)
                continue;

            for (let k = 0; k < n; k++) {
                if (k === i || k === j)
                    continue;

                if (digits[k] % 2 === 0) {
                    let num = digits[i] * 100
                        + digits[j] * 10
                        + digits[k];

                    set.add(num);
                }
            }
        }
    }

    return set.size;
};
