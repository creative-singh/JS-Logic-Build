// Question Link: https://leetcode.com/problems/promise-time-limit
// 2637. Promise Time Limit

var timeLimit = function(fn, t) {  
    return async function(...args) {

        return new Promise((resolve, rejected) => {

            setTimeout(() => rejected("Time Limit Exceeded"), t);

            fn(...args)
                .then((res) => resolve(res))
                .catch((err) => rejected(err))
        })
    }
};
