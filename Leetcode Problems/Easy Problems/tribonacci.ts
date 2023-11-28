// Quesiton Link:  https://leetcode.com/problems/n-th-tribonacci-number/

function tribonacci(n: number): number {
  if (n < 1) return 0
  let a = [0, 0, 1]
  for (let i = 2; i <= n; i++) {
    a.push(a[i] + a[i - 1] + a[i - 2])
  }
  return a[a.length - 1]
};