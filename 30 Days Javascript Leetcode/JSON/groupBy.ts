// Question Link: https://leetcode.com/problems/group-by
// 2631. Group By

Array.prototype.groupBy = function(fn) {
    let obj = {}
    for(let i of this) {
        let key = fn(i)
        if(obj[key]) {
            obj[key].push(i)
        } else {
            obj[key] = [i]
        }
    }
    return obj
};
