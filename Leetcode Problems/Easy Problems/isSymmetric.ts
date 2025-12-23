// Question Link: https://leetcode.com/problems/symmetric-tree
// 101. Symmetric Tree

var isSymmetric = function(root) {
    if(!root) return true

    return helper(root.left, root.right)
};

function helper(root1, root2) {
    if(!root1 || !root2) {
        return root1 === root2
    }
    if(root1.val == root2.val) {
        let res1 = helper(root1.left, root2.right)
        let res2 = helper(root1.right, root2.left)
        return res1 && res2
    } else {
        return false;
    }
}
