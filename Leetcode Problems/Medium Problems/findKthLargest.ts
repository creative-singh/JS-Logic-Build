// Question Link: https://leetcode.com/problems/kth-largest-element-in-an-array
// 215. Kth Largest Element in an Array

var findKthLargest = function(nums, k) {
  let queue = new MinPriorityQueue()
  
  for(let i of nums) {
    queue.enqueue(i)
    if(queue.size() > k) {
        queue.dequeue()
    }
  }
  return queue.dequeue()
};
