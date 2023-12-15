// https://leetcode.com/problems/destination-city/

var destCity = function (paths) {
  if (paths[0].length == 1) return paths[0][1];
  let set = new Set();
  for (let i of paths) {
    set.add(i[0]);
  }

  for (let i of paths) {
    if (!set.has(i[1])) return i[1];
  }
};
