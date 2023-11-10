// Question Link: https://leetcode.com/problems/min-stack/

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

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/