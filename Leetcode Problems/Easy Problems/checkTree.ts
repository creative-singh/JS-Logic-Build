// Question Link: https://leetcode.com/problems/root-equals-sum-of-children
// 2236. Root Equals Sum of Children

var checkTree = function(root) {
    return root.val === root.left.val + root.right.val
};
