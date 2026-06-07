// Question Link: https://leetcode.com/problems/total-waviness-of-numbers-in-range-i
// 3751. Total Waviness of Numbers in Range I

function totalWaviness(num1: number, num2: number): number {
    let res = 0;

    for(let i = num1; i <= num2; i++) {
        const s = i.toString();

        for(let j = 1; j < s.length - 1; j++) {
            if(
                (s[j] > s[j - 1] && s[j] > s[j + 1]) || 
                (s[j] < s[j - 1] && s[j] < s[j + 1])
            ) {
                res++;
            }
        }
    }
    return res;
};
