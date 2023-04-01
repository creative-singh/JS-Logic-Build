function fibonacci(num) {
  if (num === 1) return [0];
  let res = [0, 1]
  if (num === 2) return res;

  while (res.length < num) {
    res.push(res[res.length - 1] + res[res.length - 2])
  }
  return res;
}

console.log(fibonacci(2)); // [0, 1]
console.log(fibonacci(3)); // [0, 1, 1]
console.log(fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]