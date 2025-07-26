// Question Link: https://leetcode.com/problems/calculator-with-method-chaining
// 2726. Calculator with Method Chaining

class Calculator {
    constructor(value) {
        this.value = value;
        return value
    }
    
    add(value){
        this.value += value
        return this
    }
    
    subtract(value){
        this.value -= value
        return this
    }
    
    multiply(value) {
        this.value *= value
        return this
    }
    
    divide(value) {
        if(value === 0) throw "Division by zero is not allowed"
        this.value /= value
        return this
    }
    
    power(value) {
        this.value = this.value ** value
        return this
    }
    
    getResult() {
    }
}
        return this.value