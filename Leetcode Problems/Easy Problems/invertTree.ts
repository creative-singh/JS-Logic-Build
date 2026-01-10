// Question Link: https://leetcode.com/problems/invert-binary-tree
// 226. Invert Binary Tree

var invertTree = function(root) {
    if(!root) return null;

    invertTree(root.left)
    invertTree(root.right)
    let temp = root.left
    root.left = root.right
    root.right = temp
    return root
};
