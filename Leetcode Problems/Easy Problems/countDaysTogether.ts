// Question Link: https://leetcode.com/problems/count-days-spent-together
// 2409. Count Days Spent Together

// Short Forms here: arriveAlice: aA, leaveAlice: lA, arriveBob: aB, leaveBob: lB
function countDaysTogether(aA, lA, aB, lB): number {
    const start = aA > aB ? aA : aB;
    const end = lA < lB ? lA : lB;

    if (start > end) return 0;

    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    function toDays(date) {
        const month = Number(date.slice(0, 2)), day = Number(date.slice(3, 5));
        let total = day;

        for (let i = 0; i < month - 1; i++)
            total += days[i];

        return total;
    }

    return toDays(end) - toDays(start) + 1;
};
