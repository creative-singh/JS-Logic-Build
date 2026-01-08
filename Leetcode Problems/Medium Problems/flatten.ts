// Question Link: https://leetcode.com/problems/flatten-binary-tree-to-linked-list
// 114. Flatten Binary Tree to Linked List

var flatten = function(root) {
    if(!root) return null
    let nextRight = null

    function helper(root) {
        if(!root) return null
        helper(root.right)
        helper(root.left)

        root.left = null 
        root.right = nextRight
        nextRight = root 
    }

    helper(root)    
};
