// Question Link: https://leetcode.com/problems/kth-largest-element-in-an-array/

// var findKthLargest = function (nums, k) {
//   let queue = new MaxPriorityQueue();
//   for (let i of nums) {
//     queue.enqueue(i);
//   }
//   for (let i = 1; i < k; i++) {
//     queue.dequeue();
//   }
//   return queue.front().element;
// };

var findKthLargest = function (nums, k) {
  let pq = nums.slice(0, k);
  let minInPQ = Math.min(...pq);
  for (let i = k; i < nums.length; i++) {
    if (minInPQ < nums[i]) {
      pq.push(nums[i]);
      let ind = pq.indexOf(minInPQ);
      pq.splice(ind, 1);
      minInPQ = Math.min(...pq);
    }
  }
  return minInPQ;
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
