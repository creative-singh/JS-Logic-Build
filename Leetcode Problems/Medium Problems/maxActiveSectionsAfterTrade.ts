// Question Link: https://leetcode.com/problems/maximize-active-section-with-trade-i
// 3499. Maximize Active Section with Trade I

function maxActiveSectionsAfterTrade(s: string): number {
    const n = s.length;
    let prevZero = 0, currZero = 0, totalOnes = 0, best = 0, i = 0;

    while (i < n) {
        if (s[i] === '0') {
            prevZero++;
            i++;
        } else {
            while (i < n && s[i] === '1') {
                totalOnes++;
                i++;
            }

            while (i < n && s[i] === '0') {
                currZero++;
                i++;
            }

            if (prevZero && currZero) {
                best = Math.max(best, prevZero + currZero);
            }

            prevZero = currZero;
            currZero = 0;
        }
    }

    return totalOnes + best;
};
