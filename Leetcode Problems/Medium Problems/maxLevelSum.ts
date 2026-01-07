// Question Link: https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree
// 1161. Maximum Level Sum of a Binary Tree

var maxLevelSum = function(root) {
    let q = [root];
    let level = 1, ans = 1;
    let maxSum = -Infinity;

    while (q.length) {
        let size = q.length;
        let sum = 0;
        for (let i = 0; i < size; i++) {
            let node = q.shift();
            sum += node.val;
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
        if (sum > maxSum) {
            maxSum = sum;
            ans = level;
        }
        level++;
    }
    return ans;
};
