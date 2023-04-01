function fact(num) {
  let res = 1
  if (num < 2) return res;
  for (let i = num; i > 1; i--) {
    res *= i
  }
  return res;
}

console.log(fact(0)); // 1
console.log(fact(1)); // 1
console.log(fact(4)); // 24
console.log(fact(5)); // 120