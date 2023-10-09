// Question Link: https://leetcode.com/problems/goal-parser-interpretation

var interpret = function (command) {
  let str = "";
  for (let i = 0; i < command.length; i++) {
    if (command[i].match(/[a-zA-Z]/g)) {
      str += command[i];
    } else if (command[i] === "(" && command[i + 1] === ")") {
      str += "o";
    }
  }
  return str;
};