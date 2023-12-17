// Question Link: https://leetcode.com/problems/longest-consecutive-sequence

var longestConsecutive = function (nums) {
  let set = new Set(nums);
  let max = 0;
  for (let i of set) {
    if (!set.has(i - 1)) {
      let sequence = 1;
      while (set.has(i + sequence)) {
        sequence++;
      }
      if (sequence > max) max = sequence;
    }
  }
  return max;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(
  longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])
);
