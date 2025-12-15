// Question Link: https://leetcode.com/problems/binary-tree-inorder-traversal
// 94. Binary Tree Inorder Traversal

var inorderTraversal = function(root) {
    if(!root) return []
    let res = []
    function helper(root) {
        if(!root) return null
        helper(root.left)
        res.push(root.val)
        helper(root.right)
    }
    helper(root)
    return res
};
