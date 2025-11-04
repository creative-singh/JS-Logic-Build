// Question Link: https://leetcode.com/problems/debounce
// 2627. Debounce

var debounce = function(fn, t) {
    let id;
    return function(...args) {
        clearTimeout(id);
        id = setTimeout(() => fn(...args), t)
    }
};
