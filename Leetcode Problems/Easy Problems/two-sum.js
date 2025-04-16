// Question Link: https://leetcode.com/problems/two-sum/

// O(n^2)
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j]
    }
  }
};

// O(n)
var twoSum = function(nums, target) {
  let map = new Map()
  map.set(nums[0], 0)
  for(let i = 1; i < nums.length; i++) {
      let temp = target - nums[i]
      if(map.has(temp)) return [map.get(temp), i]
      else map.set(nums[i], i)
  }
};
