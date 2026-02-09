// Question Link: https://leetcode.com/problems/balance-a-binary-search-tree
// 1382. Balance a Binary Search Tree

var balanceBST = function(root) {
    let arr = [];
    helper(root, arr);
    
    return createBst(0, arr.length - 1, arr);
};

function helper(root, arr) {
    if(!root) return arr
    
    helper(root.left, arr)
    arr.push(root.val)
    helper(root.right, arr)
}

function createBst(l, r, arr) {
    if(l > r) return null;

    let mid = Math.floor((l + r) / 2);

    let root = new TreeNode(arr[mid]);

    root.left = createBst(l, mid - 1, arr);
    root.right = createBst(mid + 1, r, arr);

    return root
}
