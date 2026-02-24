// Question Link: https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers
// 1022. Sum of Root To Leaf Binary Numbers

var sumRootToLeaf = function(root) {
    let nums = [];
    dfs(root, nums, "")
    return nums.reduce((a, b) => a + b, 0)
};

function dfs(root, nums, binary="") {
    if(!root) {
        return null
    };
    binary += root.val

    const left = dfs(root.left, nums, binary)
    const right = dfs(root.right, nums, binary)

    if(left === null && right === null) {
        nums.push(parseInt(binary, 2))
    }
    binary = binary.substr(0, binary.length - 1)
}
