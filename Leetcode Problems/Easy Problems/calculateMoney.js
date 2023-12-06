var totalMoney = function(n) {
  let amount = 0
  let week = 1
  let weekLast = 7
  let deposit = 1
  while(n>0){
    amount += deposit
    if(deposit % weekLast == 0) {
      week++
      weekLast++
      deposit = week
    }else{
      deposit++
    }
    n--
  }
  return amount
};
