//Question Link: https://leetcode.com/problems/number-of-senior-citizens

var countSeniors = function(details) {
    let cnt = 0;
    let len = details.length; 
    for(let i = 0; i < len; i++){
        let age = details[i].slice(11, 13);
        if(age > 60) cnt++;
    }
    return cnt
};
