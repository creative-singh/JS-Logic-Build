// Question Link: https://leetcode.com/problems/execute-asynchronous-functions-in-parallel
// 2721. Execute Asynchronous Functions in Parallel

var promiseAll = function(functions) {
    return new Promise((resolve, rejected) => {
        let res = [], count = 0, isRejected = false;

        functions.forEach((fn, i) => {
            fn()
                .then((val) => {
                    if(isRejected) return;
                    res[i] = val;
                    count++;
                    if(count === functions.length)
                        resolve(res)
                })
                .catch((err) => {
                    if(!isRejected) {
                        isRejected = true;
                        rejected(err)
                    }
                })
        })

    })
};
