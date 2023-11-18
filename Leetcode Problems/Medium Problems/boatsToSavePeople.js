// Question Link: https://leetcode.com/problems/boats-to-save-people

var numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b)
  let boat = 0
  let st = 0
  let en = people.length - 1
  while (st <= en) {
    let remaining = limit - people[en]
    en--;
    boat++
    if (st <= en && remaining >= people[st]) st++;
  }
  return boat
};