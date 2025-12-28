// Question Link: https://leetcode.com/problems/minimum-interval-to-include-each-query
// 1851. Minimum Interval to Include Each Query

var minInterval = function(intervals, queries) {
    intervals.sort((a, b) => a[0] - b[0]);

    let queriesSorted = [...queries].sort((a, b) => a - b);
    let intervalHash = {}
    let heap = new MinPriorityQueu()
    let i = 0;

    for(const query of queriesSorted) {
        // add all intervals that start <= query
        while(i < intervals.length && intervals[i][0] <= query) {
            let [start, end] = intervals[i]
            let length = end - start + 1
            heap.enqueue([start, end], length)
            i++
        }
        // remove intervals that end < query
        while(heap.size() && heap.front().value[1] < query) {
            heap.dequeue()
        }

        intervalHash[query] = heap.size() ? heap.front().priority : -1
    }    

    return queries.map((query) => intervalHash[query])
};

class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class MinPriorityQueu {
    constructor() {
        this.queue = []
    }

    enqueue(value, priority) {
        let newNode = new Node(value, priority);
        this.queue.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.queue.length - 1;
        const newNode = this.queue[idx];

        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);

            if(this.queue[parentIdx].priority <= newNode.priority)
                break;
            // Swap
            this.queue[idx] = this.queue[parentIdx];
            this.queue[parentIdx] = newNode;
            idx = parentIdx
        }
    }

    dequeue() {
        if(!this.queue.length) return null
        if(this.queue.length == 1)
            return this.queue.pop()

        const maxNode = this.queue[0];

        const lastNode = this.queue.pop()
        this.queue[0] = lastNode;
        this.bubbleDown()
        return maxNode;
    }

    bubbleDown() {
        let idx = 0;
        const length = this.queue.length;
        const element = this.queue[0]

        while(true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIdx < length) {
                leftChild = this.queue[leftChildIdx]
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx
                }
            }

            if(rightChildIdx < length) {
                rightChild = this.queue[rightChildIdx]

                if(
                    (swap === null & rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ){
                    swap = rightChildIdx
                }
            }
            if(swap === null) break

            this.queue[idx] = this.queue[swap]
            this.queue[swap] = element
            idx = swap;
        }
    }

    size() {
        return this.queue.length;
    }

    front() {
        if(!this.queue.length) return null;
        return this.queue[0];
    }
}
