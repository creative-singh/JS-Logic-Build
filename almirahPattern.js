let line = 6;
let str = "";
for (let i = 1; i <= line; i++) {
  for (let j = 1; j <= line; j++) {
    if (i === 1) str += "_"
    else if (j === 1) str += "|"
    else if (j === line) str += "|"
    else if (i === line) str += "-"
    else str += "*";
  }
  str += "\n";
}

console.log(str);