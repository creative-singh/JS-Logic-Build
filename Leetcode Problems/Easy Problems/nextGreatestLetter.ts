// Question Link: https://leetcode.com/problems/find-smallest-letter-greater-than-target
// 744. Find Smallest Letter Greater Than Target

var nextGreatestLetter = function(letters, target) {
    for(let i = 0; i < letters.length; i++) {
        if(target < letters[i]) return letters[i]
    }
    return letters[0]
};
