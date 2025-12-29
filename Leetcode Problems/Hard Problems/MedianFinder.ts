// Question Link: https://leetcode.com/problems/find-median-from-data-stream
// 295. Find Median from Data Stream

var MedianFinder = function() {
    this.maxQueue = new MaxPriorityQueue()
    this.minQueue = new MinPriorityQueue()
};

MedianFinder.prototype.addNum = function(num) {
    if(this.maxQueue.isEmpty() || num <= this.maxQueue.front()) {
        this.maxQueue.enqueue(num)
    } else {
        this.minQueue.enqueue(num)
    }

    let maxSize = this.maxQueue.size()
    let minSize = this.minQueue.size() 

    if(maxSize > minSize + 1) {
        let maxVal = this.maxQueue.dequeue()
        this.minQueue.enqueue(maxVal)
    } else if (minSize > maxSize) {
        let minVal = this.minQueue.dequeue()
        this.maxQueue.enqueue(minVal)
    } 
};

MedianFinder.prototype.findMedian = function() {
    let largeVal = this.maxQueue.front()

    if(this.maxQueue.size() === this.minQueue.size()) {
        let smallVal = this.minQueue.front()

        return (smallVal + largeVal) / 2
    } else {
        return largeVal
    }
};
