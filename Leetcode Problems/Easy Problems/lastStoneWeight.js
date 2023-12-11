// https://leetcode.com/problems/last-stone-weight

// var lastStoneWeight = function (stones) {
//   while (stones.length > 1) {
//     let max = stones[0];
//     let maxInd = 0;
//     let sMax = 0;
//     for (let i = 1; i < stones.length; i++) {
//       if (stones[i] > max) {
//         sMax = max;
//         max = stones[i];
//         maxInd = i;
//       } else if (stones[i] > sMax) {
//         sMax = stones[i];
//       }
//     }
//     if (max == sMax) {
//       stones.splice(maxInd, 1);
//       let sMaxInd = stones.indexOf(sMax);
//       stones.splice(sMaxInd, 1);
//     } else {
//       let val = max - sMax;
//       stones.splice(maxInd, 1, val);
//       let sMaxInd = stones.indexOf(sMax);
//       stones.splice(sMaxInd, 1);
//     }
//   }
//   return stones[0] || 0;
// };

// Solution with Max Priority Queue
var lastStoneWeight = function (stones) {
  if (stones.length == 1) return stones[0];
  let pq = new MaxPriorityQueue();
  for (let i of stones) {
    pq.enqueue(i);
  }

  while (pq.size() > 1) {
    let first = pq.dequeue().element;
    let second = pq.dequeue().element;
    if (first != second) {
      let val = first - second;
      pq.enqueue(val);
    }
  }
  return pq.dequeue()?.element || 0;
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
console.log(lastStoneWeight([1]));
