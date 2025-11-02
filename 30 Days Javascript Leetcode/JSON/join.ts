// Question Link: https://leetcode.com/problems/join-two-arrays-by-id
// 2722. Join Two Arrays by ID

var join = function(arr1, arr2) {
    let res = {};

    for(let arr of arr1) { 
        res[arr['id']] = arr;
    }
    
    for(let i = 0; i < arr2.length; i++) {
        if(res[arr2[i].id]) {
            for(const key in arr2[i])
                res[arr2[i].id][key] = arr2[i][key]
        } else {
            res[arr2[i].id] = arr2[i]
        }
    }
    
    return Object.values(res)
};
