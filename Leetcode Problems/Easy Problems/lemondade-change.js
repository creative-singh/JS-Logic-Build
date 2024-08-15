// Question Link: https://leetcode.com/problems/lemonade-change

var lemonadeChange = function(bills) {
  if (bills[0] > 5) return false;
  let fives = 1;
  let tens = 0;
  for(let i = 1; i < bills.length; i++) {
    if(bills[i] == 5) {
      fives++
    };
    else if(bills[i] == 10) {
      if(fives) {
        fives--;
        tens++;
      } else {
        return false;
      }
    } else if(bills[i] == 20) {
      if(fives && tens) {
        fives--;
        tens--;
      } else if (fives>=3) {
        fives-=3
      } else{
        return false
      }
    }
  }    
  return true;
};
