// Question: Given a string in which there are uppercase and lowercase letters. Return string in case which is most used.

function convertCase(str) {
  let uppercase = 0;
  let lowercase = 0;

  for (let i of str) {
    if (i.match(/[a-z]/g)) {
      lowercase += 1;
    } else {
      uppercase += 1;
    }
  }

  if (lowercase > uppercase) {
    return str.toLowerCase();
  }
  return str.toUpperCase()
}

console.log(convertCase("BhavLEEN")); // BHAVLEEN
console.log(convertCase("BhavLeeN")); // bhavleen
