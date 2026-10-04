// Question Link: https://leetcode.com/problems/valid-parenthesis-string
// 678. Valid Parenthesis String

function checkValidString(s: string): boolean {
    let stack = [], star = [];

    for(let i = 0; i < s.length; i++) {
        if(s[i] === "(") {
            stack.push(i)
        } else if(s[i] === "*") {
            star.push(i)
        } else {
            if(stack.length) {
                stack.pop()
            } else if(star.length && star[star.length - 1] < i) {
                star.pop()
            } else {
                return false                
            } 
        }
    } 
    while(stack.length) {
        if(star.length && star[star.length - 1] > stack[stack.length - 1]) {
            stack.pop()
            star.pop()
        } else {
            return false
        }
    }   
    return true
};
