// Question Link: https://leetcode.com/problems/design-a-stack-with-increment-operation

class CustomStack {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.arr = []
  }

  push(x) {
    if (this.arr.length < this.maxSize) {
      this.arr.push(x)
    }
  }

  pop() {
    return this.arr.length ? this.arr.pop() : -1;
  }

  increment(k, val) {
    if (this.arr.length) {
      if (k >= this.maxSize) {
        for (let i in this.arr) {
          this.arr.splice(i, 1, this.arr[i] + val);
        }
      } else {
        for (let j = k - 1; j >= 0; j--) {
          if (this.arr[j]) {
            this.arr.splice(j, 1, this.arr[j] + val);
          }
        }
      }
    }
  }
}