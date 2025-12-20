// Question Link: https://leetcode.com/problems/delete-columns-to-make-sorted
// 944. Delete Columns to Make Sorted

var minDeletionSize = function(strs) {
    let res = 0;
    for(let i = 0; i < strs[0].length; i++) {    
        for(let j = 0; j < strs.length - 1; j++) {
            if(strs[j][i] > strs[j+1][i]) {
                res++;
                break;
            }
        }
    }
    return res
};
