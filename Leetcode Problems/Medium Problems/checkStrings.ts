// Question Link: https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-ii
// 2840. Check if Strings Can be Made Equal With Operations II

var checkStrings = function(s1, s2) {
    let evenfreq1 = new Array(26).fill(0);
    let oddfreq1 = new Array(26).fill(0);
    let evenfreq2 = new Array(26).fill(0);
    let oddfreq2 = new Array(26).fill(0);
    
    for (let i = 0; i < s1.length; i++) {
        const code1 = s1.charCodeAt(i) - 97;
        const code2 = s2.charCodeAt(i) - 97;
        if (i % 2 === 0) {
            evenfreq1[code1]++;
            evenfreq2[code2]++;
        } else {
            oddfreq1[code1]++;
            oddfreq2[code2]++;
        }
    }
    
    for (let i = 0; i < 26; i++) {
        if (evenfreq1[i] !== evenfreq2[i] || 
            oddfreq1[i] !== oddfreq2[i]) {
            return false;
        }
    }
    
    return true;
};
