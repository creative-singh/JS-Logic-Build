// Question Link: https://leetcode.com/problems/timeout-cancellation
// 2715. Timeout Cancellation

var cancellable = function(fn, args, t) {
    let timeoutId = setTimeout(() => {
        fn(...args)
    }, t);

    return () => clearTimeout(timeoutId)
};