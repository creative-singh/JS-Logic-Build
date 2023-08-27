let line = 6;

let str = ""

for (let i = 1; i <= line; i++) {
  for (let j = 1; j <= i; j++) {
    str += "*"
  }
  str += '\n'
}

console.log(str);