function checkLeapYear(year) {
  if (year % 4 === 0 || (year % 100 === 0 && year % 400 === 0)) {
    return `${year} is Leap Year`;
  }
  return `${year} is not Leap Year`;
}

console.log(checkLeapYear(2022));
console.log(checkLeapYear(2024));
console.log(checkLeapYear(2018));