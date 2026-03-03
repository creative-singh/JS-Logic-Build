// Question Link: https://leetcode.com/problems/find-kth-bit-in-nth-binary-string
// 1545. Find Kth Bit in Nth Binary String

function findKthBit(n: number, k: number): string {
    return helper(n, k - 1) ? "1" : "0"
};

function helper(n, k) {
    if(!k) return false;
    const pivot = 2 ** (n - 1) - 1;
    if(k === pivot) return true
    if(k < pivot) return helper(n - 1, k)
    return !helper(n - 1, 2 * pivot - k)
}
