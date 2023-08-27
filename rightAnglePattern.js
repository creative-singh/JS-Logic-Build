let num = 6;
let str = "";

for (let i = 1; i <= num; i++) {
  for (let j = num; j > i; j--) {
    str += ' '
  }
  for (let k = 1; k <= i; k++) {
    str += "*"
  }
  str += "\n";
}

console.log(str)