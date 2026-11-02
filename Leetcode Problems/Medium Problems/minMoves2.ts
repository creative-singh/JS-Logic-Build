// Question Link: https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii
// 462. Minimum Moves to Equal Array Elements II

function minMoves2(nums: number[]): number {
    const med = quickselect(nums, nums.length >> 1);
    return nums.reduce((moves, x) => moves + Math.abs(x - med), 0);
};

function quickselect(a, k) {
    let lo = 0, hi = a.length - 1;
    while (true) {
        const pivot = a[lo + Math.floor(Math.random() * (hi - lo + 1))];
        let lt = lo, i = lo, gt = hi;  // a[lo..lt) < pivot, a[lt..i) == pivot, a(gt..hi] > pivot
        while (i <= gt) {
            if (a[i] < pivot) swap(a, lt++, i++);
            else if (a[i] > pivot) swap(a, i, gt--);
            else i++;
        }
        if (k < lt) hi = lt - 1;
        else if (k > gt) lo = gt + 1;
        else return pivot;
    }
}

function swap(a, i, j) {
    const t = a[i]; a[i] = a[j]; a[j] = t;
};
