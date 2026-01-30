// Question Link: https://leetcode.com/problems/valid-parentheses
// 20. Valid Parentheses

var isValid = function(s) {
    let st = []
    for(let i of s) {
        if(i === '(') st.push(")")
        else if (i === "{") st.push("}")
        else if (i === "[") st.push("]")
        else if (i === ")" && st[st.length-1] === ")") st.pop(")")
        else if (i === "}" && st[st.length-1] === "}") st.pop("}")
        else if (i === "]" && st[st.length-1] === "]") st.pop("]")
        else return false
    }    
    return !st.length
};
