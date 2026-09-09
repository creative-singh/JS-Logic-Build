// Question Link: https://leetcode.com/problems/count-commas-in-range-ii
// 3871. Count Commas in Range II

function countCommas(n: number): number {
    let start = 1000, end = 0, commas = 1, res = 0;

    while (start <= n) {
        if (start > n / 1000) {
            end = n;
        } else {
            end = start * 1000 - 1;
        }

        const cnt = end - start + 1;
        res += cnt * commas;
        start *= 1000;
        commas++;
    }

    return res;
};
