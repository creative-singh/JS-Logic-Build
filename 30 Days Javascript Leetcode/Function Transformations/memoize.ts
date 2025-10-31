// Question Link: https://leetcode.com/problems/memoize
// 2623. Memoize

function memoize(fn) {
    let prevFn = new Map()
    return function(...args) {
        if(prevFn.has(`${args[0]}_${args[1]}`)) {
            return prevFn.get(`${args[0]}_${args[1]}`)
        } 
        let res = fn(...args)
        prevFn.set(`${args[0]}_${args[1]}`, res)
        return res
    }
}
