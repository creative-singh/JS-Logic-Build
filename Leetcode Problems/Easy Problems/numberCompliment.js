// Question Link: https://leetcode.com/problems/number-complement

var findComplement = function(num) {
    let binary = num.toString(2);
    let complement = ""
    for(let i = 0; i<binary.length; i++){
        if(binary[i] == 0) complement += '1'
        else complement += '0'
    }
    return parseInt(complement, 2);
};
