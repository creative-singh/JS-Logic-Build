// Question Link: https://leetcode.com/problems/binary-tree-maximum-path-sum
// 124. Binary Tree Maximum Path Sum

var maxPathSum = function(root) {
    let max = -Infinity

    function helper(root) {
        if(!root) return 0

        let left = Math.max(0, helper(root.left))
        let right = Math.max(0, helper(root.right))

        max = Math.max(max, left + right + root.val)

        return root.val + Math.max(left, right)
    }

    helper(root)
    return max
};
