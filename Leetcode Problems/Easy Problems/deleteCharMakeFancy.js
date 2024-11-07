// Question Link: https://leetcode.com/problems/delete-characters-to-make-fancy-string/

var makeFancyString = function(s) {
    let res = [s[0]];
    let freq = 1;
    for(let i = 1; i < s.length; i++){
        if(res[res.length-1] !== s[i]){
            freq = 0
        }
        res.push(s[i])
        freq++
        if(freq >= 3){
            res.pop(s[i])
        }
    }
    return res.join("")
};
