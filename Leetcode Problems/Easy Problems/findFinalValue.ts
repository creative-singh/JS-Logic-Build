// Question Link: https://leetcode.com/problems/keep-multiplying-found-values-by-two
// 2154. Keep Multiplying Found Values by Two

var findFinalValue = function(nums, original) {
    if(nums.includes(original)) {
        original = findFinalValue(nums, original * 2)
    }  
    return original
};
