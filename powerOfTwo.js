// function isPowerOfTwo(N) {
//   if (N < 1) return false;

//   while (N > 1) {
//     if (N % 2 !== 0) {
//       return false;
//     }
//     N = N / 2;
//   }
//   return true;
// }                    // Big O - O(logn)

// console.log(isPowerOfTwo(1));
// console.log(isPowerOfTwo(2));
// console.log(isPowerOfTwo(5));
// console.log(isPowerOfTwo(8));


// Big O - O(1) Linear Time Complexity
function isPowerOfTwoBitwise(n) {
  if (n < 1) return false;
  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwoBitwise(1));
console.log(isPowerOfTwoBitwise(2));
console.log(isPowerOfTwoBitwise(5));
console.log(isPowerOfTwoBitwise(8));


