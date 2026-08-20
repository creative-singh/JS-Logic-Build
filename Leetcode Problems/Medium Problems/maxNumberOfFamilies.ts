// Question Link: https://leetcode.com/problems/cinema-seat-allocation
// 1386. Cinema Seat Allocation

function maxNumberOfFamilies(n: number, reservedSeats: number[][]): number {
    let map = new Map(), group = 0, count = 0;

    for (let seat of reservedSeats) {
        if (!map.has(seat[0])) {
            map.set(seat[0], []);
        }
        map.get(seat[0]).push(seat[1]);
    }

    for (let [row, seats] of map) {
        let groupA = true, groupB = true, groupC = true;
        count++;

        for (let seat of seats) {
            if (seat === 2 || seat === 3 || seat === 4 || seat === 5)
                groupA = false;

            if (seat === 4 || seat === 5 || seat === 6 || seat === 7)
                groupB = false;

            if (seat === 6 || seat === 7 || seat === 8 || seat === 9)
                groupC = false;
        }

        if (groupA && groupC)
            group += 2;
        else if (groupA || groupB || groupC)
            group++;
    }

    group += (n - count) * 2;

    return group;
};
