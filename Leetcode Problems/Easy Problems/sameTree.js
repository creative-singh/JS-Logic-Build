// Question Link: https://leetcode.com/problems/same-tree/description/
// Leetcode 100. Same Tree

var isSameTree = function(p, q) {
    if(!p && !q) return true
    if(p && !q || !p && q) return false

    if(p.val !== q.val) return false

    let pVal = isSameTree(p.left, q.left)
    let qVal = isSameTree(p.right, q.right)

    return pVal && qVal
};
