// Question Link: https://leetcode.com/problems/interval-cancellation
// 2725. Interval Cancellation

var cancellable = function(fn, args, t) {
    fn(...args);
    const intervalId = setInterval(() => fn(...args), t)
    return () => clearInterval(intervalId)
};
