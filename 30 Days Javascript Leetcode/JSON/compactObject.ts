// Question Link: https://leetcode.com/problems/compact-object
// 2705. Compact Object

var compactObject = function(obj) {
    if(Array.isArray(obj)) {
        return parseArray(obj);
    } else {
        return parseObj(obj)
    }
};

function parseArray(arr) {
    let newArr = [];
    for(let i of arr) {
        if(Array.isArray(i)) {
            newArr.push(parseArray(i));
        } else if(typeof i === 'object' && i !== null) {
            newArr.push(parseObj(i))
        } else if(i) {
            newArr.push(i)
        }
    }
    return newArr;
}

function parseObj(obj) {
    let newObj = {};
    for(let i in obj) {
        if(Array.isArray(obj[i])) {
            newObj[i] = parseArray(obj[i])
        } else if(typeof obj[i] === 'object' && obj[i] !== null) {
            newObj[i] = parseObj(obj[i])
        } else if(obj[i]) {
            newObj[i] = obj[i]
        }
    }
    return newObj;
}
