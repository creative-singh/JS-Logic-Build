// Question Link: https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree
// 2265. Count Nodes Equal to Average of Subtree

function averageOfSubtree(root: TreeNode | null): number {
    let res = 0;

    function dfs(node) {
        if(node === null) return [0, 0]

        const [leftSum, leftCnt] = dfs(node.left);
        const [rightSum, rightCnt] = dfs(node.right);

        const sum = leftSum + rightSum + node.val;
        const cnt = leftCnt + rightCnt + 1;

        if(node.val === Math.floor(sum / cnt))
            res++

        return [sum, cnt]
    }

    dfs(root);
    return res;    
};
