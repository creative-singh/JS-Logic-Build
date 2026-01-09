// Question Link: https://leetcode.com/problems/binary-tree-right-side-view
// 199. Binary Tree Right Side View

var rightSideView = function(root) {
    if(!root) return []
    let arr = []
    helper(root, arr, 1)
    return arr
};

function helper(root, arr, level) {
    if(!root) return null

    if(arr.length < level)
        arr.push(root.val)

    helper(root.right, arr, level + 1)
    helper(root.left, arr, level + 1)
}
