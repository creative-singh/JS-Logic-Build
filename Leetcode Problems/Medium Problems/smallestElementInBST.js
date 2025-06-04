// Question Link: https://leetcode.com/problems/kth-smallest-element-in-a-bst
// Leetcode 230. Kth Smallest Element in a BST

var kthSmallest = function(root, k) {
    let op = [] 
    
    function helper(root){
        if(!root) return null

        helper(root.left)
        op.push(root.val)
        helper(root.right)
    }

    helper(root)
    return op[k-1]
};