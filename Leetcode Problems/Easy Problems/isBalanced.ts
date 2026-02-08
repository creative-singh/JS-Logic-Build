// Question Link: https://leetcode.com/problems/balanced-binary-tree
// 110. Balanced Binary Tree

var isBalanced = function(root) {
    if(!root) return true;

    const depLeft = getHeight(root.left)
    const depRight = getHeight(root.right)

    if(Math.abs(depLeft - depRight) > 1) return false
    
    const resLeft = isBalanced(root.left)
    const resRight = isBalanced(root.right)
    
    return resLeft && resRight 
};

function getHeight(root) {
    if(!root) return 0

    const depLeft = getHeight(root.left)
    const depRight = getHeight(root.right)
    
    return Math.max(depLeft, depRight) + 1
}
