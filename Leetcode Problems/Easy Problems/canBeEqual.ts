// Quesiton Link: https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i
// 2839. Check if Strings Can be Made Equal With Operations I

var canBeEqual = function(s1, s2) {
    const even1 = [s1[0], s1[2]].sort();
    const even2 = [s2[0], s2[2]].sort();
    
    const odd1 = [s1[1], s1[3]].sort();
    const odd2 = [s2[1], s2[3]].sort();

    return even1.join('') === even2.join('') &&
           odd1.join('') === odd2.join(''); 
};
