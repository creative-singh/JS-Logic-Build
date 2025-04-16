// Question Link: https://leetcode.com/problems/group-anagrams/

var groupAnagrams = function(strs) {
    let arr = []
    for(let i of strs) {
        arr.push(sort(i))
    }
    
    let map = makeMap(arr, strs)
    
    let result = []
    map.forEach(elem => result.push(elem))
    return result
};

function sort(str) {
    if(str.length < 2) return str
    let mid = Math.floor(str.length / 2)

    let leftStr = str.slice(0, mid)
    let rightStr = str.slice(mid)
    return mergeSort(sort(leftStr), sort(rightStr))
}

function mergeSort(leftStr, rightStr) {
    let sortedStr = ""

    while(leftStr.length && rightStr.length) {
        if(leftStr[0].charCodeAt() <= rightStr[0].charCodeAt()) {
            sortedStr += leftStr[0]
            leftStr = leftStr.slice(1)
        } else {
            sortedStr += rightStr[0]
            rightStr = rightStr.slice(1)
        }
    }
    return `${sortedStr}${leftStr}${rightStr}`
}

function makeMap(arr, strs) {
    let map = new Map();
    for(let i = 0; i < strs.length; i++) {
        if(map.has(arr[i])){
            map.get(arr[i]).push(strs[i])
        } else {
            map.set(arr[i], [strs[i]])
        }
    }
    return map
}
