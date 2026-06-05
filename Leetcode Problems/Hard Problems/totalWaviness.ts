// Question Link: https://leetcode.com/problems/total-waviness-of-numbers-in-range-ii
// 3753. Total Waviness of Numbers in Range II

function totalWaviness(num1: number, num2: number): number {
    const getDir = (a, b) => {
        if (a < b) 
            return 0;
        if (a === b) 
            return 1;
        return 2;
    };
    const matchDir = (dir1, dir2) => {
        return (dir1 === 0 && dir2 === 2) || (dir1 === 2 && dir2 === 0);
    };
    const getIndex = (pos, tie, lastDir, lastDigit) => {
        return ((pos * 2 + tie) * 3 + lastDir) * 10 + lastDigit;
    };
    const helper = (num) => {
        if (num <= 0) return 0;

        const digits = String(num).split('').map(Number), m = digits.length;
        const size = m * 2 * 3 * 10, totalWaviness = new Array(size).fill(0);
        const totalWays = new Array(size).fill(0);

        for (let firstPos = 0; firstPos < m; firstPos++) {
            const maxFirstDigit = firstPos === 0 ? digits[0] : 9;
            for (let firstDigit = 1; firstDigit <= maxFirstDigit; firstDigit++) {
                const tie = firstPos === 0 ? (firstDigit < digits[0] ? 1 : 0) : 1;
                const lastDir = 1;
                totalWays[getIndex(firstPos, tie, lastDir, firstDigit)]++;
            }
        }
        for (let pos = 0; pos + 1 < m; pos++) {
            for (let tie = 0; tie < 2; tie++) {
                for (let lastDir = 0; lastDir < 3; lastDir++) {
                    for (let lastDigit = 0; lastDigit < 10; lastDigit++) {
                        const idx = getIndex(pos, tie, lastDir, lastDigit);
                        if (totalWays[idx] === 0)  continue;
                        const maxNextDigit = tie ? 9 : digits[pos + 1];

                        for (let nextDigit = 0; nextDigit <= maxNextDigit; nextDigit++) {
                            const newTie = tie || nextDigit < digits[pos + 1] ? 1 : 0;
                            const newDir = getDir(lastDigit, nextDigit);
                            const newIdx = getIndex(pos + 1, newTie, newDir, nextDigit);
                            totalWaviness[newIdx] += totalWaviness[idx] + totalWays[idx] * (matchDir(lastDir, newDir) ? 1 : 0);
                            totalWays[newIdx] += totalWays[idx];
                        }
                    }
                }
            }
        }
        let res = 0;
        for (let tie = 0; tie < 2; tie++) {
            for (let lastDir = 0; lastDir < 3; lastDir++) {
                for (let lastDigit = 0; lastDigit < 10; lastDigit++) {
                    res += totalWaviness[getIndex(m - 1, tie, lastDir, lastDigit)];
                }
            }
        }
        return res;
    };
    return helper(num2) - helper(num1 - 1);
};
