// Question Link: https://leetcode.com/problems/maximum-average-pass-ratio
// 1792. Maximum Average Pass Ratio

var maxAverageRatio = function(classes, extraStudents) {
    let maxPQ = new MaxPriorityQueu();
    
    for(let [i, j] of classes) {
        maxPQ.enqueue([i, j], ((i + 1) / (j + 1)) - (i / j));
    }

    while(extraStudents) {
        let [i, j] = maxPQ.dequeue().value
        maxPQ.enqueue([i + 1, j + 1], ((i + 2) / (j + 2)) - ((i + 1) / (j + 1)))
        extraStudents--;
    }
    let sum = 0;
    while(maxPQ.size()) {
        let [i, j] = maxPQ.dequeue().value
        sum += (i / j)
    }
    return sum / classes.length
};

class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class MaxPriorityQueu {
    constructor() {
        this.queue = [];
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

            if(this.queue[parentIdx].priority >= newNode.priority)
                break;

            // Swap the current node with its parent
            this.queue[idx] = this.queue[parentIdx];
            this.queue[parentIdx] = newNode;
            idx = parentIdx;
        }
    }

    dequeue() {
        if(!this.queue.length) return null;
        if(this.queue.length === 1) 
            return this.queue.pop();

        const maxNode = this.queue[0];

        // Move the last element to the root and bubble it down
        const lastNode = this.queue.pop();
        this.queue[0] = lastNode;
        this.bubbleDown();
        return maxNode;
    }

    bubbleDown() {
        let idx = 0;
        const length = this.queue.length;
        const element = this.queue[0];

        while(true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIdx < length) {
                leftChild = this.queue[leftChildIdx]
                if(leftChild.priority > element.priority) {
                    swap = leftChildIdx
                }
            }

            if(rightChildIdx < length) {
                rightChild = this.queue[rightChildIdx];

                if(
                    (swap === null && rightChild.priority > element.priority) ||
                    (swap !== null && rightChild.priority > leftChild.priority)
                ) {
                    swap = rightChildIdx
                }
            }
            if(swap === null)
                break;

            // Swap the element with larger child (swap)
            this.queue[idx] = this.queue[swap];
            this.queue[swap] = element;
            idx = swap;
        }
    }

    size() {
        return this.queue.length;
    }
}
