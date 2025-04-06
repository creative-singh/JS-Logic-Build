// Question Link: https://leetcode.com/problems/min-stack/

// Class Based Approach
class MinStack {
  constructor() {
    this.stack = []
  }

  push(val) {
    this.stack.push(val)
  }

  getMin() {
    return Math.min(...this.stack)
  }

  pop() {
    return this.stack.pop()
  }

  top() {
    return this.stack[this.stack.length - 1]
  }
}

// Functional Based Approach
var MinStack = function() {
    this.stack = new Map()
    this.front = 0
    this.min
};

MinStack.prototype.push = function(val) {
    if(!this.stack.size) {
        this.min = val
    }
    if(this.min > val) {
        this.min = val
    }
    this.stack.set(this.front, val)
    this.front++
};

MinStack.prototype.pop = function() {
    let deleteItem = this.stack.get(this.front - 1)
    this.stack.delete(this.front - 1)
    this.front--
    if(deleteItem === this.min) {
        this.min = Math.min(...this.stack.values())
    }
};

MinStack.prototype.top = function() {
    return this.stack.get(this.front - 1)
};

MinStack.prototype.getMin = function() {
    return this.min
};
