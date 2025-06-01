// Question Link: https://leetcode.com/problems/count-good-nodes-in-binary-tree
// Leetcode 1448. Count Good Nodes in Binary Tree

var maxDepth = function(root, mxm) {
    if (!root) {
        return 0;
    }

    let cnt = 0;
    if (mxm <= root.val) {
        cnt++;
    }

    const newMxm = Math.max(mxm, root.val);

    const l = maxDepth(root.left, newMxm);
    const r = maxDepth(root.right, newMxm);

    return l + r + cnt;
};

var goodNodes = function(root) {
    if (!root) {
        return 0;
    }
    return maxDepth(root, root.val);
};

// Example usage (for testing):
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

const root = new TreeNode(3);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.left.left = new TreeNode(3);
root.right.left = new TreeNode(1);
root.right.right = new TreeNode(5);

const goodNodesCount = goodNodes(root);
console.log("Number of good nodes:", goodNodesCount); // Expected output: 4
